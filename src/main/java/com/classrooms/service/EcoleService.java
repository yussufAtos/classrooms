package com.classrooms.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.classrooms.model.Classe;



public interface EcoleService {
	List<Classe> findAllRooms();
	void  savClassroom(Classe classe);
    
	

}
