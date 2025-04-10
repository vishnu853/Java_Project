package com.dada.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dada.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>
{
	
}
