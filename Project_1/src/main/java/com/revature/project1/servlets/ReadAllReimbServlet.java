package com.revature.project1.servlets;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.project1.pojo.ERS_REIMBURSEMENT;
import com.revature.project1.service.ReimbursementService;

@WebServlet("/all")
public class ReadAllReimbServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;
	private static ReimbursementService reimbService = new ReimbursementService();
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		
			ObjectMapper mapper = new ObjectMapper();
			ArrayList<ERS_REIMBURSEMENT> al = new ArrayList<ERS_REIMBURSEMENT>();
			al = reimbService.readALL();
			
			HttpSession session = req.getSession();
			session.setAttribute("list", al);
			PrintWriter out = resp.getWriter();
			out.write(mapper.writeValueAsString(al));
			
	}
	
}