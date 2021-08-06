package com.dimafit.web;

import java.util.HashSet;	
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dimafit.dao.UserRepository;
import com.dimafit.dao.RoleRepository;
import com.dimafit.entities.ERole;
import com.dimafit.entities.Role;
import com.dimafit.entities.User;
import com.dimafit.payload.request.LoginRequest;
import com.dimafit.payload.request.SignupRequest;
import com.dimafit.payload.response.JwtResponse;
import com.dimafit.payload.response.MessageResponse;
import com.dimafit.security.jwt.JwtUtils;
import com.dimafit.security.services.UserDetailsImpl;

//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/auth/")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@PostMapping("signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);

		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(
				new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(), roles));
	}

	@PostMapping("signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest,
			BindingResult bindingResult) {

		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
		}

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		User user = new User(signUpRequest.getUsername(), signUpRequest.getEmail(),
				encoder.encode(signUpRequest.getPassword()));

		if (signUpRequest.getRole() != null) {

			Set<String> strRoles = signUpRequest.getRole();
			Set<Role> roles = new HashSet<>();
			if (strRoles == null) {

				Role athleteRole = roleRepository.findByName(ERole.ROLE_ATHLETE)
						.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
				roles.add(athleteRole);
			} else {

				strRoles.forEach(role -> {
					switch (role) {
					case "nutritionist":
						Role nutritionistRole = roleRepository.findByName(ERole.ROLE_NUTRITIONIST)
								.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
						roles.add(nutritionistRole);

						break;
					case "coach":
						Role coachRole = roleRepository.findByName(ERole.ROLE_COACH)
								.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
						roles.add(coachRole);

						break;
					default:
						Role athleteRole = roleRepository.findByName(ERole.ROLE_ATHLETE)
								.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
						roles.add(athleteRole);
					}
				});
			}

			user.setRoles(roles);

			userRepository.save(user);

		}
		userRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
}