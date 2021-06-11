package com.nkstore.pdp_service.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "product_recommendation")
public class ProductRecommendationModel {

	private String catentry_id;
	private String name;
	private String thumbImage;
	private String id;
	private Double listPrice;
	private Double offerPrice;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getThumbImage() {
		return thumbImage;
	}

	public void setThumbImage(String thumbImage) {
		this.thumbImage = thumbImage;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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
