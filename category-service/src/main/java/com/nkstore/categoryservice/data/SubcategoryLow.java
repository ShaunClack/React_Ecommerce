package com.nkstore.categoryservice.data;

import java.io.Serializable;
import java.util.List;

/**
 * @author NaveenKumar Gopalsamy
 *
 */
public class SubcategoryLow implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 6696465125162900795L;
	boolean Enabled;
	String CategoryName;
	String Description;
	String linkUrl;	
	String id;

	public boolean isEnabled() {
		return Enabled;
	}

	public void setEnabled(boolean enabled) {
		Enabled = enabled;
	}

	public String getCategoryName() {
		return CategoryName;
	}

	public void setCategoryName(String categoryName) {
		CategoryName = categoryName;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	public String getLinkUrl() {
		return linkUrl;
	}

	public void setLinkUrl(String linkUrl) {
		this.linkUrl = linkUrl;
	}

	

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

}
