package com.smartbuy.pdp_service.api;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.cloudinary.*;
import com.cloudinary.utils.ObjectUtils;

import javax.servlet.http.HttpServletResponse;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.smartbuy.pdp_service.data.Product;
import com.smartbuy.pdp_service.data.ProductData;
import com.smartbuy.pdp_service.service.SmartBuyPDPService;


@RestController
@RequestMapping("/api/v1/pdp")
public class PDPController {
	
	@Autowired
	SmartBuyPDPService smartBuyPDPService;
	
	@RequestMapping(method = RequestMethod.GET, value = "/{catentryId}")
	public ResponseEntity<?> getProductDeatil(
			@PathVariable  String catentryId,
			@RequestParam(value = "sort", required = false) String sort,
			@RequestParam(value = "range", required = false) String range,
			@RequestParam(value = "filter", required = false) String filter,
			HttpServletResponse response) {
		
		List<Product> product = new ArrayList<Product>();
		product = smartBuyPDPService.getProductsByCatentryId(catentryId);
		
		return new ResponseEntity<>(product, HttpStatus.OK);
	
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "getOne/{catentryId}")
	public ResponseEntity<?> getOneProductDeatil(
			@PathVariable  String catentryId,
			@RequestParam(value = "sort", required = false) String sort,
			@RequestParam(value = "range", required = false) String range,
			@RequestParam(value = "filter", required = false) String filter,
			HttpServletResponse response) {
		
		List<Product> product = new ArrayList<Product>();
		product = smartBuyPDPService.getProductsByCatentryId(catentryId);
		
		return new ResponseEntity<>(product, HttpStatus.OK);
	
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "updateProduct")
	public ResponseEntity<?> createProduct(@RequestBody ProductData productData, HttpServletResponse response) {		
		System.out.println("productData::"+productData);
		
		return new ResponseEntity<>("Product Added Successfully", HttpStatus.OK);
	
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "updateProductImg", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> createProducImgt(@RequestParam MultipartFile file, HttpServletResponse response) {
		
		Cloudinary cloudinary = new Cloudinary(ObjectUtils.asMap(
		"cloud_name", "naveenkumarg",
		"api_key", "261451167923954",
		"api_secret", "WVzfBhHp6KHkQipmAzUssvG4xdo"));
		 Map uploadResult = null;
		 String url = null;
		try {
			uploadResult = cloudinary.uploader().upload(file.getBytes(),ObjectUtils.asMap(
					"resource_type", "auto",
					"folder","products"));
			System.out.println("uploadResult::"+uploadResult);
			url = uploadResult.get("url").toString();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		System.out.println("productData::"+file);
		return new ResponseEntity<>(uploadResult, HttpStatus.OK);
	
	}

}
