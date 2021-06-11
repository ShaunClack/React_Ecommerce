package com.nkstore.pdp_service.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.nkstore.pdp_service.data.Product;
import com.nkstore.pdp_service.model.ProductModel;



@Component
public interface ProductDataMapper {
	
	public List<Product> convertProductData(List<ProductModel> productData);

	Product convertProductData(ProductModel productData);

}
