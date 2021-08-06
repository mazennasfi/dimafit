package com.dimafit;

import java.util.List;		
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.dimafit.dao.UserRepository;
import com.dimafit.entities.User;

@SpringBootApplication
public class DimafitApplication implements CommandLineRunner {
	@Autowired
	private UserRepository userRepository;


	public static void main(String[] args) {
		SpringApplication.run(DimafitApplication.class, args);
	}
	

	@Override
	public void run(String... args) throws Exception {
		 
		//User user1= new User("mazen","mazen@mazen.com","mazen");
		//User user2 = userRepository.save(user1);
		List<User> test = userRepository.findAll();
		for (int i=0; i<test.size(); i++)
		{
			System.out.println("heyaaaaaaaaaaaw" +test.get(i).getEmail());
		}
		
	
		
	}

}
