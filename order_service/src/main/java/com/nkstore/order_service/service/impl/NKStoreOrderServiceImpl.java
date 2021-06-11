package com.nkstore.order_service.service.impl;


import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Random;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.nkstore.order_service.data.CartAddData;
import com.nkstore.order_service.model.AddressModel;
import com.nkstore.order_service.model.CartModel;
import com.nkstore.order_service.model.OrderItems;
import com.nkstore.order_service.model.Orders;
import com.nkstore.order_service.model.ProductInCartModel;
import com.nkstore.order_service.model.ProductModel;
import com.nkstore.order_service.repository.AddressRepository;
import com.nkstore.order_service.repository.CartRepository;
import com.nkstore.order_service.repository.OrderItemsRepository;
import com.nkstore.order_service.repository.OrdersRepository;
import com.nkstore.order_service.repository.ProductRepository;
import com.nkstore.order_service.service.NKStoreOrderService;


@Service
public class NKStoreOrderServiceImpl implements NKStoreOrderService {
	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	CartRepository cartRepository;
	
	@Autowired
	AddressRepository addressRepository;
	
	@Autowired
	OrdersRepository ordersRepository;
	
	@Autowired
	OrderItemsRepository orderItemsRepository;
	

	@Override
	public boolean addItemToCart(CartAddData cartAddData) {
		
		try
		{
		ProductModel productDet =  productRepository.findByCatentryId(cartAddData.getCatentryId());
		
		CartModel cartData = new CartModel();
		cartData = cartRepository.findByEmailId(cartAddData.getEmailId());
		
		ProductInCartModel product = new ProductInCartModel();
		product.setCatentryId(productDet.getCatentryId());
		product.setProductName(productDet.getName());
		product.setPrice(productDet.getListPrice());
		product.setQuantity(1);
		Double totalPriceOfProduct = product.getQuantity() * product.getPrice();
		product.setTotalPrice(totalPriceOfProduct);
		
		if(cartData != null && cartData.getCartId()!=null)
		{
			
			List<ProductInCartModel> existingProductList = cartData.getProducts();
			existingProductList.add(product);
			cartData.setProducts(existingProductList);
			Double totalCartValue = 0.0;
			Iterator<ProductInCartModel> listItr = existingProductList.listIterator();			
			while(listItr.hasNext()) {
				ProductInCartModel prod = new ProductInCartModel();
				prod = listItr.next();
				Double productPrice = prod.getTotalPrice();
				totalCartValue+=productPrice;				
			}
			cartData.setTotalPrice(totalCartValue);
			
			cartRepository.save(cartData);	
			
		}
		else
		{
			Random random = new Random();
			int randomWithNextInt = random.nextInt();
			cartData = new CartModel();
			cartData.setCartId(String.valueOf(randomWithNextInt));
			List<ProductInCartModel> productList = new ArrayList<ProductInCartModel>();
			productList.add(product);
			cartData.setProducts(productList);
			Double totalCartValue = 0.0;
			Iterator<ProductInCartModel> listItr = productList.listIterator();			
			while(listItr.hasNext()) {
				ProductInCartModel prod = new ProductInCartModel();
				prod = listItr.next();
				Double productPrice = prod.getTotalPrice();
				totalCartValue+=productPrice;				
			}
			cartData.setTotalPrice(totalCartValue);
			cartData.setEmailId(cartAddData.getEmailId());
			cartRepository.save(cartData);			
		}
			return true;
		}
		catch(Exception e)
		{
			System.out.println("Exception in Adding to Cart:"+e);
			return false;
		}
		
		
	}

	@Override
	public CartModel getCart(String emailId) {
		
		CartModel cartData = new CartModel();
		cartData = cartRepository.findByEmailId(emailId);
		return cartData;
	}

	@Override
	public List<AddressModel> getMyAddress(String emailId) {
		
		try 
		{
			List<AddressModel> address  = addressRepository.findByUserId(emailId);		
			
			return address;
			
		}
		catch (Exception e) {
			System.out.println("Error Occured:: "+e);
			return null;
		}
	}

	@Override
	public String placeOrder(String emailId) {
		
		try
		{
		CartModel cartData = new CartModel();
		cartData = cartRepository.findByEmailId(emailId);
		if(cartData != null && cartData.getCartId()!=null)
		{
			List<ProductInCartModel> existingProductList = cartData.getProducts();		
			Iterator<ProductInCartModel> listItr = existingProductList.listIterator();
			
			UUID uuid1 = UUID. randomUUID();
			String uuidforOrder = uuid1. toString();
			UUID uuid2 = UUID. randomUUID();
			String uuidforOrderItems = uuid2. toString();
			
			while(listItr.hasNext()) {
				ProductInCartModel product = new ProductInCartModel();
				product = listItr.next();
				OrderItems item = new OrderItems();
				item.setOrdersId(uuidforOrder);
				item.setOrderItemsId(uuidforOrderItems);
				item.setCatentryId(product.getCatentryId());
				item.setPrice(product.getPrice());
				item.setQuantity(product.getQuantity());
				item.setTotalPrice(product.getTotalPrice());
				orderItemsRepository.save(item);
			}
			
			Orders order = new Orders();
			order.setAddressId(emailId);
			order.setEmailId(emailId);
			order.setOrderDescription("Order for User with user id:"+emailId);
			order.setOrderId(uuidforOrder);
			order.setOrderItemsId(uuidforOrderItems);
			order.setOrderStatus("PLACED");
			order.setShippingCost(0.0);
			order.setTotalPrice(cartData.getTotalPrice());			
			
			ordersRepository.save(order);
			
			cartRepository.deleteByEmailId(emailId);
			
			return uuidforOrder;
			
		}
		}
		catch(Exception e)
		{
			System.out.println("Error in Placing Order:"+e);
			return UUID. randomUUID().toString();
		}
		
		return null;
	}

}
