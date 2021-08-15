package com.dimafit.web;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;	

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dimafit.dao.GenderRepository;
import com.dimafit.dao.UserRepository;
import com.dimafit.entities.EGender;
import com.dimafit.entities.ERole;
import com.dimafit.entities.Gender;
import com.dimafit.entities.Role;
import com.dimafit.entities.User;

@CrossOrigin(origins = "*", maxAge = 3600) 
@RestController
@RequestMapping("api/")
public class UserController {
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	GenderRepository genderRepository;
	
	@GetMapping("users")
	public List<User> listUsers(){
		return userRepository.findAll();
	}
	
	@GetMapping("users/{id}")
	public User getUser(@PathVariable(name="id") Long id){
		return userRepository.getById(id);
	}
	
	@PutMapping("update/{id}")
	public ResponseEntity updateInfo(@PathVariable Long id,@RequestBody User user) {
		
		User currentUser = userRepository.findById(id).orElseThrow(RuntimeException::new);
		//user.setUsername(currentUser.getUsername());
		//user.setEmail(currentUser.getEmail());
		//user.setPassword(currentUser.getPassword());
		currentUser.setFirstName(user.getFirstName());
		currentUser.setLastName(user.getLastName());
		currentUser.setWeight(user.getWeight());
		currentUser.setHeight(user.getHeight());
		Gender gender = user.getGender();
		genderRepository.save(gender);
		currentUser.setGender(gender);
		currentUser.setBirthDate(user.getBirthDate());
		currentUser.setDiseases(user.getDiseases());
		
		
		
		currentUser = userRepository.save(currentUser);  
        
		return ResponseEntity.ok(currentUser);
		
	}


}
