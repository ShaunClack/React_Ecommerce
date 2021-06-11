import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import home from "./Pages/Home";
import SignUp from "./Pages/signup"
import Login from "./Pages/Login"
import accountdetails from "./Components/Account/Myaccount"
import categoryPage from './Components/PLP/Product'
import ProductDetail from './Components/Product/ProductDetail'
import Checkout from './Components/Checkout/Checkout'
import Cookies from 'js-cookie'
import Cart from './Components/Checkout/cart'


export default function App() {
    let loggedIn = Cookies.get('sb_loggedIn');

    if(loggedIn === "true")
    {
      return(
        <main>
            <Switch>
              <Route path="/home" component={home}></Route>
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/Myaccount" component={accountdetails}></Route>
              <Route path="/category/:categoryId" component={categoryPage}></Route> 
              <Route path="/product/:id" component={ProductDetail}></Route>  
              <Route path="/checkout"  component={Checkout}></Route>     
              <Route path="/cart"  component={Cart}></Route>              
              <Route path="/" component={home}></Route>              
            </Switch>
        </main>
      )  
    }
    else{
      console.log("loggedIn ",loggedIn)
      return(
        <main>
            <Switch>
              <Route path="/home" component={home}></Route>
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/Myaccount" component={Login}></Route>
              <Route path="/category/:categoryId" component={categoryPage}></Route>  
              <Route path="/product/:id" component={ProductDetail}></Route>   
              <Route path="/checkout"  component={Login}></Route>            
              <Route path="/" component={home}></Route>
            </Switch>
        </main>
      )  
    }
}