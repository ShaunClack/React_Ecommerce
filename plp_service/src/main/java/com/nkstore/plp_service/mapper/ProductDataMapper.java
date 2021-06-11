package com.nkstore.plp_service.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.nkstore.plp_service.data.Product;

@Component
public interface ProductDataMapper {
	
	public List<Product> convertUserData(List<com.nkstore.plp_service.model.Product> productData);

}
