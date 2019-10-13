package com.classrooms.service.impl;


import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.persistence.PreRemove;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.classrooms.dao.ClasseDao;
import com.classrooms.model.Classe;
import com.classrooms.service.EcoleService;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service(value = "ecoleService")
public class EcoleServiceImpl implements EcoleService {
	
	@Autowired
	private ClasseDao classeDao;
	
	@Override
	@Transactional
	public List<Classe> findAllRooms() {
		return classeDao.findAll();
	}
	@Transactional
	@Override
	public void savClassroom(Classe classe) {
		classeDao.save(classe);
	}



}
