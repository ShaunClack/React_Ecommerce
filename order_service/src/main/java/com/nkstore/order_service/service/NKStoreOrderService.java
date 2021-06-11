
package com.nkstore.order_service.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nkstore.order_service.data.CartAddData;
import com.nkstore.order_service.model.AddressModel;
import com.nkstore.order_service.model.CartModel;



@Service
public interface NKStoreOrderService {
	
	public boolean addItemToCart(CartAddData cartAddData);

	public CartModel getCart(String emailId);

	public List<AddressModel> getMyAddress(String emailId);

	public String placeOrder(String emailId);
	

}