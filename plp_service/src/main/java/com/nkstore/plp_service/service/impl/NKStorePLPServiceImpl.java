package com.nkstore.plp_service.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.repository.support.PageableExecutionUtils;

import com.nkstore.plp_service.data.Product;
import com.nkstore.plp_service.data.ProductResponse;
import com.nkstore.plp_service.mapper.ProductDataMapper;
import com.nkstore.plp_service.repository.ProductRepository;
import com.nkstore.plp_service.service.NKStorePLPService;

@Service
public class NKStorePLPServiceImpl implements NKStorePLPService {
	
	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	ProductDataMapper productDataMapper;
	
	@Autowired 
	private MongoOperations mongoOperations;

	@Override
	public List<Product> getProductsByCategory(String category) {
		
		List<com.nkstore.plp_service.model.Product> productData = productRepository.findBySubCategory(category);
		if(productData == null)
		{
			productData = productRepository.findByCategory(category);
		}
		List<Product> products = new ArrayList<Product>();
		products = productDataMapper.convertUserData(productData);
		return products;
	}

	@Override
	public ProductResponse getAllProducts(String sort, String pagination, String filter) {
		
		String sortOption = "";	
		String paginationRange = ""; 		 
		int pageNumber = 0;
		int noOfElements = 50;
		Pageable paging = PageRequest.of(pageNumber,noOfElements);
		String statusFilter ="";
		
		
		try {	
			
			if(!StringUtils.isEmpty(sort))
				sortOption = sort.substring(1,sort.length()-1);
			
			if(!StringUtils.isEmpty(pagination))
				paginationRange = pagination.substring(1,pagination.length()-1);
			
			
			String[] arrOfStr = sortOption.split(","); 		 		 
			String[] pagesValue = paginationRange.split(","); 
			  
			if(!StringUtils.isEmpty(filter))
				filter = filter.substring(1,filter.length()-1);
			
			String[] filterValue = filter.split(":"); 
			
			if(filterValue!=null && filterValue.length>=2 ) {

				 statusFilter=filterValue[1].replace("\"", "");
			}
			
			if(pagesValue.length>=2)
			{
				pageNumber = Integer.parseInt(pagesValue[0]);
				noOfElements = Integer.parseInt(pagesValue[1]);
			}
						
			if(arrOfStr.length >=2) {
				if(arrOfStr[1].substring(1,arrOfStr[1].length()-1).equalsIgnoreCase("DESC"))
					paging = PageRequest.of(pageNumber,noOfElements, Sort.by(arrOfStr[0].substring(1,arrOfStr[0].length()-1)).descending());
				else
					paging = PageRequest.of(pageNumber,noOfElements, Sort.by(arrOfStr[0].substring(1,arrOfStr[0].length()-1)).ascending());
			}
			else
			{
				paging = PageRequest.of(pageNumber,noOfElements);
			}
		 }
		catch (NumberFormatException e) {
			System.out.println("Could not parse the range value given for pagination ."+e);
		}
		catch (Exception e)
		{
			System.out.println("Error at parsing Sort or pagination Values ."+e);
		}
		
		Page<com.nkstore.plp_service.model.Product> pagedResult = null;
		Page<com.nkstore.plp_service.model.Product> pagedResultAll = null;
		if(StringUtils.isEmpty(statusFilter) || statusFilter.equalsIgnoreCase("all")) {
			
			
				Query query = new Query();
				Query query1 = new Query();
				query.with(paging);
				List<com.nkstore.plp_service.model.Product> products = mongoOperations.find(query, com.nkstore.plp_service.model.Product.class);
				try {
					pagedResult = PageableExecutionUtils.getPage(products, paging,() -> mongoOperations.count(query, com.nkstore.plp_service.model.Product.class));
					pagedResultAll = PageableExecutionUtils.getPage(products, paging,() -> mongoOperations.count(query1, com.nkstore.plp_service.model.Product.class));
				}
				catch(Exception e)
				{
					pagedResult = null;
					pagedResultAll = null;
				}
				
			
		}
	   else {
		   pagedResult = productRepository.findByCategory(statusFilter, paging);				
		}
		
		ProductResponse productResponse = new ProductResponse();
		
		productResponse.setData(productDataMapper.convertUserData(pagedResult.toList()));
		
		
		productResponse.setCount(new Long(pagedResultAll.getTotalElements()));
	    	
		return productResponse;
		
		
		
	}

}
