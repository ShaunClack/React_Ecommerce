package com.nkstore.categoryservice.data;

import java.io.Serializable;

import org.springframework.http.HttpStatus;

/**
 * @author NaveenKumar Gopalswamy
 *
 */
public class ErrorResponseData implements Serializable {
	
	String error;
	HttpStatus httpStatus;
	public String getError() {
		return error;
	}
	public void setError(String error) {
		this.error = error;
	}
	public HttpStatus getHttpStatus() {
		return httpStatus;
	}
	public void setHttpStatus(HttpStatus httpStatus) {
		this.httpStatus = httpStatus;
	}

}
