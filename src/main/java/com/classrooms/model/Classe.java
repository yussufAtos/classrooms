package com.classrooms.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.PreRemove;
import javax.persistence.SequenceGenerator;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Classe implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	//@GeneratedValue
	@GeneratedValue (strategy = GenerationType.AUTO) 
//	@SequenceGenerator(name="seq-gen",sequenceName="MY_SEQ_GEN", initialValue=205, allocationSize=12)
//	@GeneratedValue(strategy= GenerationType.SEQUENCE, generator="seq-gen")
	private int id;

	private String classeName;

	public Classe( String classeName) {
		this.classeName = classeName;
	}

	public Classe() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getClasseName() {
		return classeName;
	}

	public void setClasseName(String classeName) {
		this.classeName = classeName;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}


}
