package com.nkstore.categoryservice.data;

import java.io.Serializable;
import java.util.List;

/**
 * @author NaveenKumar Gopalsamy
 *
 */
public class Subcategory implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -8902054119945905025L;
	boolean Enabled;
	String CategoryName;
	String Description;
	String linkUrl;
	int Priority;
	CategoryImage categoryImage;
	List<SubcategoryLow> subcategoryLow;
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

	public int getPriority() {
		return Priority;
	}

	public void setPriority(int Priority) {
		Priority = Priority;
	}

	public CategoryImage getCategoryImage() {
		return categoryImage;
	}

	public void setCategoryImage(CategoryImage categoryImage) {
		this.categoryImage = categoryImage;
	}

	

	public List<SubcategoryLow> getSubcategoryLow() {
		return subcategoryLow;
	}

	public void setSubcategoryLow(List<SubcategoryLow> subcategoryLow) {
		this.subcategoryLow = subcategoryLow;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

}
