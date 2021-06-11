package com.nkstore.order_service.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.nkstore.order_service.model.ProductModel;

@Repository
public interface ProductRepository extends MongoRepository<ProductModel, String> {

  public ProductModel findByCategory(String category);
  
  public List<ProductModel> findBySubCategory(String subCategory);

  public ProductModel findByCatentryId(String catentryId);
  
  public Optional<ProductModel> findById(String catentryId);
  			

}