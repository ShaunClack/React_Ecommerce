package com.nkstore.pdp_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@SpringBootApplication
public class PdpServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PdpServiceApplication.class, args);
	}

}
