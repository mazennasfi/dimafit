package com.dimafit;

import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.dimafit.dao.RoleRepository;
import com.dimafit.dao.UserRepository;
import com.dimafit.entities.ERole;
import com.dimafit.entities.Role;
import com.dimafit.entities.User;

@SpringBootApplication
public class DimafitApplication implements CommandLineRunner {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private RoleRepository roleRepository;
	@Autowired
	PasswordEncoder encoder;


	public static void main(String[] args) {
		SpringApplication.run(DimafitApplication.class, args);
	}
	

	@Override
	public void run(String... args) throws Exception {
		
		Role athlete =new Role(ERole.ROLE_ATHLETE);
		System.out.println(athlete.getName());
		
		Set<Role> roles = new HashSet<Role>();
		roles.add(athlete);
		roleRepository.save(athlete);
		
		 
		//User user1= new User("mazen","mazen@mazen.com","mazen");
		
		
		List<User> users= userRepository.findAll();
		
	for (int i = 0; i < users.size(); i++) {
		System.out.println(users.get(i).getEmail());
		//System.out.println(users.get(i).getRoles());
		//Set<Role> roles2 = users.get(i).getRoles();
		
		
	        
	    }
	
	///// BROOOOOOO
	
	
	
	User user = new User("mazen","mazen@mazen.com",	encoder.encode("mazen"));
	user.setRoles(roles);
	User user2 = userRepository.save(user);

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	///////BROOOOOO
		

		
	}
		
	
		
	

}
