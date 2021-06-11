package com.nkstore.order_service.api;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nkstore.order_service.data.CartAddData;
import com.nkstore.order_service.model.AddressModel;
import com.nkstore.order_service.model.CartModel;
import com.nkstore.order_service.service.nkstoreOrderService;




@RestController
@RequestMapping("/api/v1/order")
public class OrderController {
	
	@Autowired
	nkstoreOrderService smartOrderService;
	
	
	
	@RequestMapping(method = RequestMethod.POST, value = "addtocart")
	public ResponseEntity<?> addItemToCart(
			@RequestBody CartAddData cartAddData,		
			HttpServletResponse response) {
		
		
		boolean status = false;
		
		status = smartOrderService.addItemToCart(cartAddData);
		
		return new ResponseEntity<>(status, HttpStatus.OK);
	
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "getCart")
	public ResponseEntity<?> getMyCart(
			@RequestParam(name = "emailId") String emailId,		
			HttpServletResponse response) {
		
		
		CartModel cartData = new CartModel();
		
		cartData = smartOrderService.getCart(emailId);
		
		return new ResponseEntity<>(cartData, HttpStatus.OK);
	
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "getMyAddress")
	public ResponseEntity<?> getMyAddress(
			@RequestParam(name = "emailId") String emailId,		
			HttpServletResponse response) {
		
		
		List<AddressModel> addressData = new ArrayList<AddressModel>();
		
		addressData = smartOrderService.getMyAddress(emailId);
		
		return new ResponseEntity<>(addressData, HttpStatus.OK);
	
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "placeMyOrder")
	public ResponseEntity<?> placeMyOrder(
			@RequestParam(name = "emailId") String emailId,		
			HttpServletResponse response) {
		
		
		String orderId = new String();
		
		orderId = smartOrderService.placeOrder(emailId);
		
		return new ResponseEntity<>(orderId, HttpStatus.OK);
	
	}
	
	

}
