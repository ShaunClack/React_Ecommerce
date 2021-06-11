package com.nkstore.categoryservice.api;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nkstore.categoryservice.data.Category;
import com.nkstore.categoryservice.data.ErrorResponseData;
import com.nkstore.categoryservice.data.SuccessResponseData;
import com.nkstore.categoryservice.service.CategoryService;

/**
 * @author Naveen Kumar Gopalsamy
 *
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/category/")
public class CategoryApi {

	private static final Logger logger = LoggerFactory.getLogger(CategoryApi.class);

	@Autowired
	CategoryService categoryService;

	@GetMapping("gettopcat")
	@ResponseBody
	public ResponseEntity<?> getTopCategoryMap(HttpServletResponse response) {

		try {
			System.out.println("Coming to fecth Category");

			List<Category> categoryData = categoryService.getTopLevelCategory();
			return new ResponseEntity<>(categoryData, HttpStatus.OK);

		} catch (Exception e) {
			e.printStackTrace();
			errorResponseData("Error in Getting Address", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return errorResponseData("Error in Getting Address", HttpStatus.INTERNAL_SERVER_ERROR);
	}

	private ResponseEntity<?> errorResponseData(String errorMessage, HttpStatus status) {

		ErrorResponseData errorData = new ErrorResponseData();
		errorData.setError(errorMessage);
		errorData.setHttpStatus(status);
		return new ResponseEntity<>(errorData, status);
	}

	private ResponseEntity<?> responseData(String message, HttpStatus status) {

		SuccessResponseData successData = new SuccessResponseData();
		successData.setMessage(message);
		successData.setHttpStatus(status);
		return new ResponseEntity<>(successData, status);
	}

}
