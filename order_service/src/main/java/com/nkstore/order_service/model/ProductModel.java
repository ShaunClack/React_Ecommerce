package com.nkstore.order_service.model;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection = "products")
public class ProductModel {

	private String id;
	private String catentryId;
	private String name;
	private String shortDesc;
	private String longDesc;
	private String brand;
	private String sku;
	private String category;
	private String subCategory;
	private String thumbImage;
	private List<String> fullImage;	
	private Double listPrice;
	private Double offerPrice;
	private String hasAR;

	public String getHasAR() {
		return hasAR;
	}

	public void setHasAR(String hasAR) {
		this.hasAR = hasAR;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	

	public String getCatentryId() {
		return catentryId;
	}

	public void setCatentryId(String catentryId) {
		this.catentryId = catentryId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getShortDesc() {
		return shortDesc;
	}

	public void setShortDesc(String shortDesc) {
		this.shortDesc = shortDesc;
	}

	public String getLongDesc() {
		return longDesc;
	}

	public void setLongDesc(String longDesc) {
		this.longDesc = longDesc;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getSubCategory() {
		return subCategory;
	}

	public void setSubCategory(String subCategory) {
		this.subCategory = subCategory;
	}

	public String getThumbImage() {
		return thumbImage;
	}

	public void setThumbImage(String thumbImage) {
		this.thumbImage = thumbImage;
	}

	public List<String> getFullImage() {
		return fullImage;
	}

	public void setFullImage(List<String> fullImage) {
		this.fullImage = fullImage;
	}

	
	public Double getListPrice() {
		return listPrice;
	}

	public void setListPrice(Double listPrice) {
		this.listPrice = listPrice;
	}

	public Double getOfferPrice() {
		return offerPrice;
	}

	public void setOfferPrice(Double offerPrice) {
		this.offerPrice = offerPrice;
	}

}