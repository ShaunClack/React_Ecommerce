package com.nkstore.pdp_service.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "attributes")
public class AttributesModel {

	private String size;
	private String color;

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

}
