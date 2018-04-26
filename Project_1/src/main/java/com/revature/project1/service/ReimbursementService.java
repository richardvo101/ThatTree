package com.revature.project1.service;

import java.util.ArrayList;

import com.revature.project1.dao.ERS_REIMBURSEMENT_DAO_IMPL;
import com.revature.project1.dao.ERS_USERS_DAO_IMPL;
import com.revature.project1.pojo.ERS_REIMBURSEMENT;

public class ReimbursementService extends ERS_REIMBURSEMENT_DAO_IMPL  {
	
	public boolean createReimbursements(ERS_REIMBURSEMENT newReimb) {
		
		if(createReimbursement(newReimb)) {
			return true;
		}
		else {
			return false;
		}
		
	}
	
	public ArrayList<ERS_REIMBURSEMENT> readALL(){
		ArrayList<ERS_REIMBURSEMENT> al = new ArrayList<ERS_REIMBURSEMENT>();
		al = readAllReimbursement();
		
		return al;
		
	}
	public ArrayList<ERS_REIMBURSEMENT> readMine(int ers_user_id){
		ArrayList<ERS_REIMBURSEMENT> al = new ArrayList<ERS_REIMBURSEMENT>();
		al = readReimbursement(ers_user_id);
		
		return al;
		
	}
	
	public boolean updateReimbursement(ERS_REIMBURSEMENT ers) {
		boolean checker = false;
		if(updateReimbursement(ers))
		{
			checker = true;
		}
		
		return checker;
		
	}
	
	
}
