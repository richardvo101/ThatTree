package com.revature.project1.dao;

import java.util.ArrayList;

import com.revature.project1.pojo.ERS_REIMBURSEMENT;

public interface ERS_REIMBURSEMENT_DAO {
	public boolean createReimbursement(ERS_REIMBURSEMENT newReimbursement);
	public ArrayList<ERS_REIMBURSEMENT> readAllReimbursement ();
	public ArrayList<ERS_REIMBURSEMENT> readReimbursement(int ers_user_id);
	public boolean updateReimbursement(ERS_REIMBURSEMENT reimbursement);
	public boolean delReimbursement(int reimb_id);

}
