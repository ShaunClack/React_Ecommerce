package com.nkstore.plp_service.data;

import java.io.Serializable;
import java.util.List;


public class ProductResponse implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1271104229268438827L;
	
	List <Product> data;
	Long count;
	public List<Product> getData() {
		return data;
	}
	public void setData(List<Product> data) {
		this.data = data;
	}
	public Long getCount() {
		return count;
	}
	public void setCount(Long count) {
		this.count = count;
	}

}
