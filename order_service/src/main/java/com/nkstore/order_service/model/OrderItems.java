package com.nkstore.order_service.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "orderitems")
public class OrderItems {
	
	
	String orderItemsId;
	String ordersId;
	String catentryId;
	Double price;
	int quantity;
	
	public String getOrderItemsId() {
		return orderItemsId;
	}
	public void setOrderItemsId(String orderItemsId) {
		this.orderItemsId = orderItemsId;
	}
	public String getOrdersId() {
		return ordersId;
	}
	public void setOrdersId(String ordersId) {
		this.ordersId = ordersId;
	}
	public String getCatentryId() {
		return catentryId;
	}
	public void setCatentryId(String catentryId) {
		this.catentryId = catentryId;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public Double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}
	Double totalPrice;
	

}
