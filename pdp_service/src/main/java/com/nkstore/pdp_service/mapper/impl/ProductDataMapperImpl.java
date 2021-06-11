package com.nkstore.pdp_service.mapper.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.springframework.stereotype.Component;

import com.nkstore.pdp_service.data.Product;
import com.nkstore.pdp_service.mapper.ProductDataMapper;
import com.nkstore.pdp_service.model.ProductModel;

@Component
public class ProductDataMapperImpl implements ProductDataMapper {

	private Logger logger;
	
	@Override
	public List<Product> convertProductData(List<ProductModel> productData) {
		
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
				prod.setLongDesc(product.getLongDesc());
				prod.setName(product.getName());
				prod.setOfferPrice(product.getOfferPrice());
				prod.setShortDesc(product.getShortDesc());
				prod.setSku(product.getSku());
				prod.setSubCategory(product.getSubCategory());
				prod.setThumbImage(product.getThumbImage());
				prod.setAttributes(product.getAttributes());
				prod.setProductRecommendation(product.getProductRecommendation());
				prod.setHasAR(product.getHasAR());
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

	
	@Override
	public Product convertProductData(ProductModel productData) {
		
		Product product = new Product();
		
		product.setBrand(productData.getBrand());
		product.setCategory(productData.getCategory());
		product.setCatentryId(productData.getCatentryId());
		product.setFullImage(productData.getFullImage());
		product.setId(productData.getId());
		product.setListPrice(productData.getListPrice());
		product.setLongDesc(productData.getLongDesc());
		product.setName(productData.getName());
		product.setOfferPrice(productData.getOfferPrice());
		product.setShortDesc(productData.getShortDesc());
		product.setSku(productData.getSku());
		product.setSubCategory(productData.getSubCategory());
		product.setThumbImage(productData.getThumbImage());
		product.setAttributes(productData.getAttributes());
		product.setProductRecommendation(productData.getProductRecommendation());
		product.setHasAR(productData.getHasAR());
		
		return product;
			
	}
	

}
