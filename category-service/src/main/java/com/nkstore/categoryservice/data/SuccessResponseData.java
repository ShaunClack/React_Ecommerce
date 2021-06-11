package com.nkstore.categoryservice.data;

import java.io.Serializable;

import org.springframework.http.HttpStatus;

/**
 * @author NaveenKumar Gopalswamy
 *
 */
public class SuccessResponseData implements Serializable {
	
	String message;
	HttpStatus httpStatus;
	public String setMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public HttpStatus getHttpStatus() {
		return httpStatus;
	}
	public void setHttpStatus(HttpStatus httpStatus) {
		this.httpStatus = httpStatus;
	}

}
