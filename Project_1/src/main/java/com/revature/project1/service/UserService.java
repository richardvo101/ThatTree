package com.revature.project1.service;

import com.revature.project1.dao.ERS_USERS_DAO_IMPL;
import com.revature.project1.pojo.ERS_USERS;

public class UserService extends ERS_USERS_DAO_IMPL  {
	
	public ERS_USERS login(String Username, String Password) {
		ERS_USERS user = new ERS_USERS();
		user = readUser(Username, Password);
		
		return user;
	}
	
	public boolean updatesUser (ERS_USERS user) {
		boolean checker=false;
		if(updateUser(user)) {
			checker = true;
		}
		
		return checker;
	}
	
	public boolean createUsers(ERS_USERS newUser) {
		boolean checker = false;
		
		if(createUser(newUser)) {
			checker = true;
		}
		
		return checker;
	}
}
