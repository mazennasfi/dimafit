package com.dimafit.web;

import org.springframework.security.access.prepost.PreAuthorize;	
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
	@GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}
	
	@GetMapping("/athlete")
	@PreAuthorize("hasRole('ATHLETE') or hasRole('NUTRITIONIST') or hasRole('COACH')")
	public String athleteAccess() {
		return "ATHLETE Content.";
	}

	@GetMapping("/nutritionist")
	@PreAuthorize("hasRole('NUTRITIONIST')")
	public String nutritionistAccess() {
		return "NUTRITIONIST Board.";
	}

	@GetMapping("/coach")
	@PreAuthorize("hasRole('COACH')")
	public String coachAccess() {
		return "COACH Board.";
	}
}