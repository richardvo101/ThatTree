package com.revature.project1.dao;

import java.util.ArrayList;

import com.revature.project1.pojo.ERS_USERS;

public interface ERS_USERS_DAO {
	public boolean createUser(ERS_USERS newUser);
	public ERS_USERS readUser(String username, String Password);
	public ArrayList<ERS_USERS> readAllUser();
	public boolean updateUser(ERS_USERS User);
	public boolean delUser(ERS_USERS User);	
}
