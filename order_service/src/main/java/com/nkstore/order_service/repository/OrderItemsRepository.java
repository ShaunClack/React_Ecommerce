package com.nkstore.order_service.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nkstore.order_service.model.AddressModel;
import com.nkstore.order_service.model.OrderItems;



public interface OrderItemsRepository extends MongoRepository<OrderItems, String> {
 
    
    public List<OrderItems> findByOrdersId(String ordersId);
    
	
  

}