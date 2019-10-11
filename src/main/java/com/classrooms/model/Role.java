package com.classrooms.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Role implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private Long Id;
	private String role;
	
//	 @ManyToMany(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST,CascadeType.MERGE }, mappedBy = "roles")
//	 private Collection<User> users = new ArrayList<>();
	 

	public Role(String role) {
		super();
		this.role = role;
	}

	public Role() {

	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

}
