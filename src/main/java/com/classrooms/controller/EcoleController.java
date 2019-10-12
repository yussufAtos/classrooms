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
import com.classrooms.model.Classe;

import com.classrooms.service.EcoleService;

@RestController
//@CrossOrigin(origins = "http://domain2.com", maxAge = 3600)
public class EcoleController {

	@Autowired
	private EcoleService ecoleService;

	@Autowired
	private ClasseDao classeDao;
	
	@GetMapping(value = "/classes")
	public List<Classe> getRooms() {
		System.out.println("getRooms is called");
		return ecoleService.findAllRooms();
	}
	

	@PostMapping(value = "/classe")
	public void saveClassroom(@RequestBody Classe classe) {	
		
		ecoleService.savClassroom(classe);
	}
	
	
	



}
