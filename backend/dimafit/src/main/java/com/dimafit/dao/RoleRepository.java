package com.dimafit.dao;

import java.util.Optional;	
import org.springframework.data.jpa.repository.JpaRepository;

import com.dimafit.entities.ERole;
import com.dimafit.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Integer>{
	Optional<Role> findByName(ERole name);


}
