package com.nkstore.order_service.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * @author NaveenKumar Gopalsamy
 *
 */

@Document(collection = "shipping_address")
public class AddressModel {
	
	@Id
	String id;
	
	String name;
	String mobileNumber;
	
	String pinCode;
	String locality;
	String address;
	String city;
	String state;
	String landMark;
	String alternateNumber;
	String addressType;
	String userId;
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getPinCode() {
		return pinCode;
	}
	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}
	public String getLocality() {
		return locality;
	}
	public void setLocality(String locality) {
		this.locality = locality;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getLandMark() {
		return landMark;
	}
	public void setLandMark(String landMark) {
		this.landMark = landMark;
	}
	public String getAlternateNumber() {
		return alternateNumber;
	}
	public void setAlternateNumber(String alternateNumber) {
		this.alternateNumber = alternateNumber;
	}
	public String getAddressType() {
		return addressType;
	}
	public void setAddressType(String addressType) {
		this.addressType = addressType;
	}
	
	@Override
	public String toString() {
		return "AddressModel [id=" + id + ", name=" + name + ", mobileNumber=" + mobileNumber + ", pinCode=" + pinCode
				+ ", locality=" + locality + ", address=" + address + ", city=" + city + ", state=" + state
				+ ", landMark=" + landMark + ", alternateNumber=" + alternateNumber + ", addressType=" + addressType
				+ ", userId=" + userId + "]";
	}
	
	
}
