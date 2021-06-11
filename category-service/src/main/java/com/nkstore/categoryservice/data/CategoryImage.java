package com.nkstore.categoryservice.data;

import java.io.Serializable;
import java.util.List;

/**
 * @author NaveenKumar Gopalsamy
 *
 */
public class CategoryImage implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 3597750055687614327L;
	String name;
	String caption;
	String url;
	String id;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCaption() {
		return caption;
	}

	public void setCaption(String caption) {
		this.caption = caption;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

}
