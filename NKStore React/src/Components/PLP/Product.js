import React, { Component } from 'react'
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import HeaderBarFunction from '../HeaderBar/Header';
import FooterComponent from "../Footer/FooterComponent";
import './Product.css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Cookies from 'js-cookie'

 const Alert= (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export class Products extends Component {

    constructor(props) {
        super(props)
        this.state = {
          data: null,
          products: [],
          flag: 0,
          open:false,
          error:false,
          login:false
        }
      }

      async componentDidMount() {
        let categoryId = this.props.match.params.categoryId;
        let plp_data_url = process.env.REACT_APP_PLP_ENDPOINT;
        plp_data_url = plp_data_url+ "/"+categoryId;
        console.log("Catgore URL:",plp_data_url)
        const requestOptions = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          };
        try {
            await fetch(plp_data_url, requestOptions)
            .then(response => response.json())
            .then((data) => { 
              console.log("Response Category:---->",data);
              this.setState({ products: data });
             
            })
            .catch((error) => {
            
             console.error("Error in fetching the PLP: ",error);
            })
        
      
        }
        catch (error) {
          console.log("*****Category error****",error)
          console.error(error)
        }
      }

      async addCart(id) {
        console.log("Item Added to Cart",id);
        let loggedIn = Cookies.get('sb_loggedIn');
        let emailId = Cookies.get('sb_emailId');
        console.log("loggedIn",loggedIn);
         if(loggedIn == "true"){
          let cart_data_url = process.env.REACT_APP_ORDER_ENDPOINT;
          cart_data_url = cart_data_url+ "/addtocart";
          console.log("Cart URL:",cart_data_url)
          const body ={       
            "catentryId":id, 
            "emailId":emailId
           }
          const requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
            };
           
          try {
              await fetch(cart_data_url, requestOptions)
              .then(response => response.json())
              .then((data) => { 
                console.log("Response Cart:---->",data);
                if(data)
                  this.setState({ open: true });     
                else
                  this.setState({ error: true });   
              
               
              })
              .catch((error) => {
                this.setState({ error: true });
               console.error("Error in adding item to cart: ",error);
              })
          
        
          }
          catch (error) {
            console.error("Error in adding item to cart: ",error);
            this.setState({ error: true });
          }
        }
        else
        {
          this.setState({ login: true });
        }
       
  
     };
  
     handleClose =()=>{   
      this.setState({ open: false });
      this.setState({ error: false });
      this.setState({ login: false });
     }

      
   


    render() {
        
        return (
            <div style={{overflow:"hidden"}}>
            <HeaderBarFunction/>
            <Grid container style={{ backgroundColor: 'whitesmoke'}}> 
           
            <div id="product">
               {
                   this.state.products.map(product =>(
                       <div className="card" key={product.catentryId}>
                           <Link to={`/product/${product.catentryId}`}>
                               <img src={product.thumbImage} alt="" width="365" height="365"/>
                           </Link>
                           <div className="content">
                               <h5>
                                   <Link to={`/product/${product.catentryId}`}>{product.name}</Link>
                               </h5>
                               <span>₹  {product.offerPrice}</span>
                               <p>{product.name}</p>
                             <button onClick={()=> this.addCart(product.catentryId)}>Add to cart</button> 
                           </div>
                       </div>
                   ))
               }
            </div>
            <Snackbar open={this.state.open} autoHideDuration={2000} onClose={() => this.handleClose()}>
                  <Alert onClose={() => this.handleClose()} severity="success">
                     Item has been added to Cart!
                  </Alert>
              </Snackbar>
              <Snackbar open={this.state.error} autoHideDuration={2000} onClose={() => this.handleClose()}>
                  <Alert  onClose={() => this.handleClose()} severity="error">Error in adding Item to Cart!</Alert>
              </Snackbar>
              <Snackbar open={this.state.login} autoHideDuration={2000} onClose={() => this.handleClose()}>
                  <Alert  onClose={() => this.handleClose()} severity="warning">Please login to add item to your Cart!</Alert>
              </Snackbar>
            </Grid>
    <FooterComponent/>
    </div>
        )
    }
}

export default Products
