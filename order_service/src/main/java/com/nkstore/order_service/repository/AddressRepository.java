package com.nkstore.order_service.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nkstore.order_service.model.AddressModel;



public interface AddressRepository extends MongoRepository<AddressModel, String> {

 
    public List<AddressModel> findByUserId(String emailId);
	
  

}