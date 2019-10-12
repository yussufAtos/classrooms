package com.classrooms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.classrooms.dao.ClasseDao;
import com.classrooms.model.Classe;

@SpringBootApplication
public class ClassroomsApplication implements CommandLineRunner{
	@Autowired
	private ClasseDao classeDao;
	public static void main(String[] args) {
		SpringApplication.run(ClassroomsApplication.class, args);
	}
	@Override
	public void run(String... agr0) {
		classeDao.save(new Classe("first classroom"));
	}

}
