package com.nkstore.categoryservice.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nkstore.categoryservice.data.Category;
import com.nkstore.categoryservice.repository.CategoryRepository;
import com.nkstore.categoryservice.service.CategoryService;

/**
 * @author Naveen Kumar Gopalsamy
 *
 */
@Service
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	CategoryRepository categoryRepository;

	@Override
	public List<Category> getTopLevelCategory() {

		try {
			List<Category> categoryData = categoryRepository.findAll();

			return categoryData;

		} catch (Exception e) {
			System.out.println("Error Occured:: " + e);
			return null;
		}

	}

}
