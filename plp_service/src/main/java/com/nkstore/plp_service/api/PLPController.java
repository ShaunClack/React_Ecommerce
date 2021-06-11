package com.smartbuy.plp_service.api;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smartbuy.plp_service.data.Product;
import com.smartbuy.plp_service.data.ProductResponse;
import com.smartbuy.plp_service.service.SmartBuyPLPService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/plp")
public class PLPController {
	
	@Autowired
	SmartBuyPLPService smartBuyPLPService;
	
	@RequestMapping(method = RequestMethod.GET, value = "/{category}")
	public ResponseEntity<?> getProductsByCategory(
			@PathVariable  String category,
			@RequestParam(value = "sort", required = false) String sort,
			@RequestParam(value = "range", required = false) String range,
			@RequestParam(value = "filter", required = false) String filter,
			HttpServletResponse response) {
		
		List<Product> product = new ArrayList<Product>();
		product = smartBuyPLPService.getProductsByCategory(category);
		
		return new ResponseEntity<>(product, HttpStatus.OK);
	
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/getall")
	public ResponseEntity<?> getAllProducts(			
			@RequestParam(value = "sort", required = false) String sort,
			@RequestParam(value = "range", required = false) String range,
			@RequestParam(value = "filter", required = false) String filter,
			HttpServletResponse response) {
		
		ProductResponse product = new ProductResponse();
		product = smartBuyPLPService.getAllProducts(sort, range, filter);
		
		return new ResponseEntity<>(product, HttpStatus.OK);
	
	}

}
