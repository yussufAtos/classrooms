package com.classrooms.controller;

import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import com.classrooms.dao.ClasseDao;
import com.classrooms.dao.UserDao;
import com.classrooms.model.Classe;
import com.classrooms.model.Role;
import com.classrooms.model.UserApp;
import com.classrooms.service.EcoleService;
import com.classrooms.service.UserService;

@RestController
//@CrossOrigin("https://yussufschool.herokuapp.com")
public class EcoleController {

	@Autowired
	private EcoleService ecoleService;

	@Autowired
	private ClasseDao classeDao;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private UserDao userDao;
	
	@GetMapping(value = "/classes")
	public List<Classe> getRooms() {
		//System.out.println("getRooms is called");
		return ecoleService.findAllRooms();
		//return "getRooms Helloo world";
	}
	

	@PostMapping(value = "/classe")
	public void saveClassroom(@RequestBody Classe classe) {	
		//System.out.println("saveClassroom is called");
     ecoleService.savClassroom(classe);

	}
	
	@PostMapping(value = "/create")
	public void createUser() {	
		UserApp userApp = new UserApp("ali", "ali", 25);
		Role r1 = new Role("admin");
		Role r2 = new Role("user");
		userApp.getRoles().add(r1);
		userApp.getRoles().add(r2);
		userService.save(userApp);

	}
	



}
