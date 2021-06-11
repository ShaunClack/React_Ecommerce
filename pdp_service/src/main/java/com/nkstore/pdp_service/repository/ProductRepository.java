package com.nkstore.pdp_service.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.nkstore.pdp_service.model.ProductModel;



@Repository
public interface ProductRepository extends MongoRepository<ProductModel, String> {

  public List<ProductModel> findByCategory(String category);
  
  public List<ProductModel> findBySubCategory(String subCategory);

  public List<ProductModel> findByCatentryId(String catentryId);
  
  public Optional<ProductModel> findById(String catentryId);
  			

}