package pack;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/MyServlet")
public class MyServlet extends HttpServlet {
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		String name = request.getParameter("name");
		String introducing = request.getParameter("introducing");
		PrintWriter out = response.getWriter();
		if (stringContainsNumber(name) == true && introducing.length() < 6){
			out.write("1");
		} else if (stringContainsNumber(name) == true){
			out.write("2");
		} else if (introducing.length() < 6){
			out.write("3");
		} else {
			out.write("0");
		}
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}
	
	public boolean stringContainsNumber(String string){
	    Pattern pattern = Pattern.compile("[0-9]");
	    Matcher matcher = pattern.matcher(string);

	    return matcher.find();
	}

}
