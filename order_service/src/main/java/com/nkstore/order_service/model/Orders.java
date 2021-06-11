package com.nkstore.order_service.model;

import java.time.ZonedDateTime;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

@Document(collection = "orders")
public class Orders {
	
	@Id
	String orderId;
	String orderItemsId;
	Double totalPrice;
	Double shippingCost;
	String emailId;
	String orderStatus;
	String orderDescription;
	String addressId;
	
	@DateTimeFormat(iso = ISO.DATE_TIME)
	private Date timePlaced;
	
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	public String getOrderItemsId() {
		return orderItemsId;
	}
	public void setOrderItemsId(String orderItemsId) {
		this.orderItemsId = orderItemsId;
	}
	public Double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}
	public Double getShippingCost() {
		return shippingCost;
	}
	public void setShippingCost(Double shippingCost) {
		this.shippingCost = shippingCost;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}
	public String getOrderDescription() {
		return orderDescription;
	}
	public void setOrderDescription(String orderDescription) {
		this.orderDescription = orderDescription;
	}
	public String getAddressId() {
		return addressId;
	}
	public void setAddressId(String addressId) {
		this.addressId = addressId;
	}
	public Date getTimePlaced() {
		return timePlaced;
	}
	public void setTimePlaced(Date timePlaced) {
		this.timePlaced = timePlaced;
	} 
}
