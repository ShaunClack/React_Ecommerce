
package com.nkstore.pdp_service.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nkstore.pdp_service.data.Product;



@Service
public interface NKStorePDPService {
	
	public List<Product> getProductsByCatentryId(String catentryId);
	public Product getProductById(String catentryId);

}