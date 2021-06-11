package com.nkstore.order_service.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.DeleteQuery;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.nkstore.order_service.model.CartModel;


public interface CartRepository extends MongoRepository<CartModel, String> {
	 public Optional<CartModel> findByCartId(String cartId);

	public CartModel findByEmailId(String emailId);
	
	 @DeleteQuery
	  void deleteByEmailId(String emailId);

}
