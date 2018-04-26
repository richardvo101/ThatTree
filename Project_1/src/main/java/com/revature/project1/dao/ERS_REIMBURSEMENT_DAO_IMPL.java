package com.revature.project1.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import com.revature.project1.jdbc.ConnectionFactory;
import com.revature.project1.pojo.ERS_REIMBURSEMENT;

public class ERS_REIMBURSEMENT_DAO_IMPL implements ERS_REIMBURSEMENT_DAO {

	public boolean createReimbursement(ERS_REIMBURSEMENT newReimbursement) {
		boolean check = false;
		try {
			
			Connection conn = ConnectionFactory.getInstance().getConnection();

		    
		    String sql = "INSERT INTO ERS_REIMBURSEMENT (REIMB_AMOUNT, REIMB_SUBMITTED, REIMB_RESOLVED,"
					+ "REIMB_DESCRIPTION, REIMB_RECEIPT, REIMB_AUTHOR, REIMB_STATUS_ID,"
					+ "REIMB_TYPE_ID) VALUES (?,?,?,?,?,?,?,?)";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setDouble(1, newReimbursement.getReimb_amount());
			ps.setString(2, newReimbursement.getReimb_submitted());
			ps.setString(3, newReimbursement.getReimb_resolved());
			ps.setString(4,  newReimbursement.getReimb_description());
			ps.setString(5,  newReimbursement.getReimb_receipt());
			ps.setInt(6, newReimbursement.getReimb_author());	
			ps.setInt(7, newReimbursement.getReimb_status_id());
			ps.setInt(8, newReimbursement.getReimb_type_id());
			
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()) {
				return true;
			}
			conn.commit();
			conn.close();
		} catch(SQLException e){
			e.printStackTrace();
		}
		
		return check; 
	}
	
	public ArrayList<ERS_REIMBURSEMENT> readAllReimbursement() {
		ArrayList<ERS_REIMBURSEMENT> al = new ArrayList<ERS_REIMBURSEMENT>();
		
		try {
			Connection conn = ConnectionFactory.getInstance().getConnection();
			String sql = "SELECT * from ERS_REIMBURSEMENT";
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			while(rs.next()) {
				    ERS_REIMBURSEMENT temp = new ERS_REIMBURSEMENT();
				    temp.setReimb_id(rs.getInt(1));
					temp.setReimb_amount(rs.getDouble(2));
					temp.setReimb_submitted(rs.getString(3));
					temp.setReimb_resolved(rs.getString(4));
					temp.setReimb_description(rs.getString(5));
					temp.setReimb_receipt(null);
					temp.setReimb_author(rs.getInt(7));
					temp.setReimb_resolver(rs.getInt(8));
					temp.setReimb_status_id(rs.getInt(9));
					temp.setReimb_type_id(rs.getInt(10));
					al.add(temp);
				}
			conn.close();
			}catch (SQLException e) {
				e.printStackTrace();
		}
		
		return al;
		
	}
	
	public ArrayList<ERS_REIMBURSEMENT> readReimbursement(int ers_user_id) {
		ArrayList<ERS_REIMBURSEMENT> al = new ArrayList<ERS_REIMBURSEMENT>();
		ERS_REIMBURSEMENT temp = new ERS_REIMBURSEMENT();
		
		try (Connection conn = ConnectionFactory.getInstance().getConnection();){
			String sql = "Select * from ERS_REIMBURSEMENT WHERE ERS_REIMBURSEMENT_AUTHOR = ?";
			PreparedStatement ps = conn.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()) {
				temp.setReimb_amount(rs.getDouble(1));
				temp.setReimb_submitted(rs.getString(2));
				temp.setReimb_resolved(rs.getString(3));
				temp.setReimb_description(rs.getString(4));
				temp.setReimb_receipt(null);
				temp.setReimb_author(rs.getInt(6));
				temp.setReimb_resolver(rs.getInt(7));
				temp.setReimb_status_id(rs.getInt(8));
				temp.setReimb_type_id(rs.getInt(9));
				al.add(temp);
			}
			conn.close();
		} catch (SQLException e){
			e.printStackTrace();
		}
		
		return al;
	}

	public boolean updateReimbursement(ERS_REIMBURSEMENT Reimbursement) {
		
		boolean check = false;
		try {
			Connection conn = ConnectionFactory.getInstance().getConnection();
			conn.setAutoCommit(false);
		    String [] keys = new String[1];
		    keys[0] = "ERS_REIMBURSEMENT_ID";
		    
		    String sql = "UPDATE ERS_REIMBURSEMENT SET REIMB_AMOUNT = ?, REIMB_SUBMITTED=?, REIMB_RESOLVED=?,"
					+ "REIMB_DESCRIPTION=?, REIMB_RECEIPT=?, REIMB_AUTHOR=?, REIMB_RESOLVER=?, REIMB_STATUS_ID,"
					+ "REIMB_TYPE_ID=? Where ERS_REIMBURSEMENT_ID=?";
			PreparedStatement ps = conn.prepareStatement(sql,keys);
			ps.setDouble(1, Reimbursement.getReimb_amount());
			ps.setString(2, Reimbursement.getReimb_submitted());
			ps.setString(3, Reimbursement.getReimb_resolved());
			ps.setString(4, Reimbursement.getReimb_description());
			ps.setString(5,  Reimbursement.getReimb_receipt());
			ps.setInt(6, Reimbursement.getReimb_author());
			ps.setInt(7, Reimbursement.getReimb_resolver());		
			ps.setInt(8, Reimbursement.getReimb_status_id());
			ps.setInt(9, Reimbursement.getReimb_type_id());
			ps.setInt(10, Reimbursement.getReimb_id());
			
			ResultSet rs = ps.executeQuery();
			if(rs.wasNull()) {
				check=false;
			}
			else {
				check=true;
			}
			conn.commit();
			conn.close();
		} catch(SQLException e){
			e.printStackTrace();
		}
		
		return check;
	}

	public boolean delReimbursement(int reimb_id) {
		// TODO Auto-generated method stub
		return false;
	}

}
