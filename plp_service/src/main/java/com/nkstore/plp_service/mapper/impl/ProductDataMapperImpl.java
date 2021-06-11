package com.nkstore.plp_service.mapper.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.springframework.stereotype.Component;

import com.nkstore.plp_service.data.Product;
import com.nkstore.plp_service.mapper.ProductDataMapper;
@Component
public class ProductDataMapperImpl implements ProductDataMapper {

	private Logger logger;
	
	@Override
	public List<Product> convertUserData(List<com.nkstore.plp_service.model.Product> productData) {
		
		 List<Product> products = new ArrayList<Product>();
		try
		{
			productData.forEach(product->{
				Product prod = new Product();
				prod.setBrand(product.getBrand());
				prod.setCategory(product.getCategory());
				prod.setCatentryId(product.getCatentryId());
				prod.setFullImage(product.getFullImage());
				prod.setId(product.getId());
				prod.setListPrice(product.getListPrice());
				prod.setLongDesc(prod.getLongDesc());
				prod.setName(product.getName());
				prod.setOfferPrice(product.getOfferPrice());
				prod.setShortDesc(product.getShortDesc());
				prod.setSku(product.getSku());
				prod.setSubCategory(product.getSubCategory());
				prod.setThumbImage(product.getThumbImage());
				products.add(prod);
			});
			return products;
		}
		catch(Exception e)
		{
			logger.error("Error in Product Data Mapping: "+e);
			return null;
		}
	}

}
