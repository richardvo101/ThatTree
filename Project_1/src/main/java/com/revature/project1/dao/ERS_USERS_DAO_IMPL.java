package com.revature.project1.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.revature.project1.jdbc.ConnectionFactory;
import com.revature.project1.pojo.ERS_USERS;

public class ERS_USERS_DAO_IMPL implements ERS_USERS_DAO {

	public static void main (String args[]) {
		
	}
	public boolean createUser(ERS_USERS newUser) {
		boolean check =false;
		try(Connection conn = ConnectionFactory.getInstance().getConnection();) {
			
			conn.setAutoCommit(false);
			String sql = "INSERT INTO ERS_USERS(ERS_USERNAME, ERS_PASSWORD, USER_FIRST_NAME, USER_LAST_NAME, USER_EMAIL,"
					+ " USER_ROLE_ID) VALUES ( ?,?,?,?,?,?)";

			
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, newUser.getErs_username());
			ps.setString(2, newUser.getErs_password());
			ps.setString(3, newUser.getUser_first_name());
			ps.setString(4, newUser.getUser_last_name());
			ps.setString(5, newUser.getUser_email());
			ps.setInt(6, 1);
			
			int rowsUpdated = ps.executeUpdate();

			if(rowsUpdated != 0) {
				conn.commit();
				return true;
			}
			conn.commit();
			conn.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return check;
	}
	
	public ERS_USERS readUser(String username, String Password) {
		ERS_USERS eu = new ERS_USERS();
		boolean is = false;
		try(Connection conn = ConnectionFactory.getInstance().getConnection();) {
			String sql = "SELECT * FROM ERS_USERS WHERE ERS_USERNAME = ? AND ERS_PASSWORD = ?";
			
			PreparedStatement ps = conn.prepareStatement(sql);
			System.out.println(username + Password);
			ps.setString(1, username);
			ps.setString(2, Password);
			
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()) {
				is = true;
				eu.setErs_user_id(rs.getInt(1));
				eu.setErs_username(rs.getString(2));
				eu.setErs_password(rs.getString(3));
				eu.setUser_first_name(rs.getString(4));
				eu.setUser_last_name(rs.getString(5));
				eu.setUser_email(rs.getString(6));
				eu.setUser_role_id(rs.getInt(7));
			}
			
		}catch (SQLException e) {
			e.printStackTrace();
		}
		return (is) ? eu:null;
	}
	
	public ArrayList<ERS_USERS> readAllUser() {
		
		
		return null;
	}
	

	public boolean updateUser(ERS_USERS newUser) {
		boolean check = false;
		
		try(Connection conn = ConnectionFactory.getInstance().getConnection();) {
			
			conn.setAutoCommit(false);
			String sql = "UPDATE ERS_USERS SET ERS_USERNAME=?, ERS_PASSWORD=?, USER_FIRST_NAME=?,"
					+ "USER_LAST_NAME=?, USER_EMAIL=? WHERE ERS_USERS_ID =?";	
			
			PreparedStatement ps = conn.prepareStatement(sql);
			
			ps.setString(1, newUser.getErs_username());
			ps.setString(2, newUser.getErs_password());
			ps.setString(3, newUser.getUser_first_name());
			ps.setString(4, newUser.getUser_last_name());
			ps.setString(5, newUser.getUser_email());
			ps.setInt(6,  newUser.getErs_user_id());
			
			int rowsUpdated = ps.executeUpdate();

			if(rowsUpdated != 0) {
				conn.commit();
				return true;
			}
			conn.close();
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	
	
	return check;
	}


	public boolean delUser(ERS_USERS User) {
		boolean check = false;
		try (Connection conn = ConnectionFactory.getInstance().getConnection();){
			conn.setAutoCommit(false);
			String sql = "DELETE FROM ERS_USERS WHERE ERS_USER_ID = ?";
			
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, User.getErs_user_id());
			ResultSet rs = ps.executeQuery();
			
			sql = "DELETE FROM ERS_USER_ROLES WHERE ERS_USER_ROLE_ID = ?";
			ps = conn.prepareStatement(sql);
			ps.setInt(1, User.getErs_user_id());
			
			while(rs.next()) {
				check=true;
			}
			conn.close();
		}catch(SQLException e) {
			e.printStackTrace();
		}
		return check;
	}



}
