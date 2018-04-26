package com.revature.project1.servlets;


import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.project1.pojo.ERS_REIMBURSEMENT;
import com.revature.project1.service.ReimbursementService;


@WebServlet("/update")
public class UpdateReimbursementServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;
	private static ReimbursementService rService = new ReimbursementService();
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		if(req.getInputStream() != null) {
			ObjectMapper mapper = new ObjectMapper();
			ERS_REIMBURSEMENT reimbursement = mapper.readValue(req.getInputStream(), ERS_REIMBURSEMENT.class);

			rService.updateReimbursement(reimbursement);
			
			HttpSession session = req.getSession();
			session.setAttribute("reimbursement", reimbursement);
			PrintWriter out = resp.getWriter();
			out.write(mapper.writeValueAsString(reimbursement));
			
		}
	}
	
}