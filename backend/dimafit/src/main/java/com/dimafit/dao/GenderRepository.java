package com.dimafit.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dimafit.entities.EGender;
import com.dimafit.entities.ERole;
import com.dimafit.entities.Gender;
import com.dimafit.entities.Role;

public interface GenderRepository extends JpaRepository<Gender, Integer>{
	Optional<Gender> findByName(EGender name);


}
