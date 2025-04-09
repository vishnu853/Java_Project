package com.dada.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dada.model.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long>
{
	
}
