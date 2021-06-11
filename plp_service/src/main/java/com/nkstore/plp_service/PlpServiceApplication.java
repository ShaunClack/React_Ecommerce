package com.nkstore.plp_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.nkstore.plp_service","com.nkstore.plp_service.service"})
public class PlpServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlpServiceApplication.class, args);
	}

}
