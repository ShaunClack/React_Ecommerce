package com.nkstore.order_service.model;

public class ProductInCartModel {
	
	String catentryId;
	int quantity;
	Double price;
	Double totalPrice;
	String productName;
	
	
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	
	public String getCatentryId() {
		return catentryId;
	}
	public void setCatentryId(String catentryId) {
		this.catentryId = catentryId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public Double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}
	
	

}
