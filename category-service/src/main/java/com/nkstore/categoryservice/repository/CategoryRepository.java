package com.nkstore.categoryservice.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nkstore.categoryservice.data.Category;

public interface CategoryRepository extends MongoRepository<Category, String> {

}