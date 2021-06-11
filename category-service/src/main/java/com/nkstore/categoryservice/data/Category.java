package com.nkstore.categoryservice.data;

import java.io.Serializable;
import java.util.List;

/**
 * @author NaveenKumar Gopalsamy
 *
 */
public class Category implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 4120473892929619178L;
	boolean Enabled;
	boolean topNav;
	List<CategoryImage> categoryImage;
	String CategoryName;
	int Priority;
	List<Subcategory> subcategory;
	String id;
	public boolean isEnabled() {
		return Enabled;
	}
	public void setEnabled(boolean enabled) {
		Enabled = enabled;
	}
	public boolean isTopNav() {
		return topNav;
	}
	public void setTopNav(boolean topNav) {
		this.topNav = topNav;
	}

	public String getCategoryName() {
		return CategoryName;
	}
	public void setCategoryName(String categoryName) {
		CategoryName = categoryName;
	}
	
	 public int getPriority() 
	 { 
		 return Priority; 
	 }
	 
	 public void setPriority(int priority) 
	 { 
		 Priority = priority; 
	 }
	 
	
	
	 public List<CategoryImage> getCategoryImage() {
		return categoryImage;
	}
	public void setCategoryImage(List<CategoryImage> categoryImage) {
		this.categoryImage = categoryImage;
	} 
	public List<Subcategory> getSubcategory() {
		return subcategory;
	}
	public void setSubcategory(List<Subcategory> subcategory) {
		this.subcategory = subcategory;
	} 
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	
}
