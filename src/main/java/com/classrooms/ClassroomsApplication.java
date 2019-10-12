package com.classrooms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.classrooms.dao.RoleDao;
import com.classrooms.dao.UserDao;
import com.classrooms.model.Classe;
import com.classrooms.model.Role;
import com.classrooms.model.UserApp;
import com.classrooms.service.UserService;
import com.classrooms.dao.ClasseDao;

@SpringBootApplication
public class ClassroomsApplication implements CommandLineRunner{
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private RoleDao roleDao;
	
	@Autowired
	private UserService userService;
	@Autowired
	private ClasseDao classeDao;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	public static void main(String[] args) {
		SpringApplication.run(ClassroomsApplication.class, args);
	}

	@Bean
	public BCryptPasswordEncoder getBCPE() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	public void run(String... agr0) {

		String hashPwd = bCryptPasswordEncoder.encode( "youssef");
		UserApp userApp=new UserApp("youssef", hashPwd ,25);
		Role r1=	roleDao.save(new Role("admin"));
		Role r2=	roleDao.save(new Role("user"));
		userApp.getRoles().add(r1);
		userApp.getRoles().add(r2);
		userService.save(userApp);	
		classeDao.save(new Classe("first classroom"));
		
	}
	

}
