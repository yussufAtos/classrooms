package com.classrooms.dao;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.classrooms.model.Classe;



@Repository
public interface ClasseDao   extends JpaRepository<Classe, Integer>{
	
	Classe findByNom(String name );

}
