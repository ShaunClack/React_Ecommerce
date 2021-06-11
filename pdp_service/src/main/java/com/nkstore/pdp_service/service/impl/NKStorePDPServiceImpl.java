package com.nkstore.pdp_service.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nkstore.pdp_service.data.Product;
import com.nkstore.pdp_service.mapper.ProductDataMapper;
import com.nkstore.pdp_service.model.ProductModel;
import com.nkstore.pdp_service.repository.ProductRepository;
import com.nkstore.pdp_service.service.NKStorePDPService;



@Service
public class NKStorePDPServiceImpl implements NKStorePDPService {
	
	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	ProductDataMapper productDataMapper;

	@Override
	public List<Product> getProductsByCatentryId(String catentryId) {
		
		List<ProductModel> productData = productRepository.findByCatentryId(catentryId);
		
		List<Product> products = new ArrayList<Product>();
		products = productDataMapper.convertProductData(productData);
		return products;
	}

	@Override
	public Product getProductById(String catentryId) {
		Optional<ProductModel> productData = productRepository.findById(catentryId);
		
		Product products = new Product();
		products = productDataMapper.convertProductData(productData.get());
		return products;
	}

}
