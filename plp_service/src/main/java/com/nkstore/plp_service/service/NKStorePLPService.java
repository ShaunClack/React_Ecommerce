
package com.nkstore.plp_service.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nkstore.plp_service.data.Product;
import com.nkstore.plp_service.data.ProductResponse;

@Service
public interface NKStorePLPService {
	
	public List<Product> getProductsByCategory(String category);

	public ProductResponse getAllProducts(String sort, String pagination, String filter);

}