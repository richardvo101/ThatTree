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
import com.revature.project1.pojo.ERS_USERS;
import com.revature.project1.service.UserService;

@WebServlet("/update")
public class UpdateProfileServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;
	private static UserService userService = new UserService();
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		if(req.getInputStream() != null) {
			ObjectMapper mapper = new ObjectMapper();
			ERS_USERS credential = mapper.readValue(req.getInputStream(), ERS_USERS.class);
	


			boolean checker = userService.updatesUser(credential);
			
			if(checker==true) {
				System.out.println("we made it");
			credential = userService.readUser(credential.getErs_username(), credential.getErs_password());
			}
			
			credential.setErs_password("");; //so that once authenticated, do not pass user's password around
			HttpSession session = req.getSession();
			session.setAttribute("credential", credential);
			PrintWriter out = resp.getWriter();
			out.write(mapper.writeValueAsString(credential));
			
		}
	}
	
}