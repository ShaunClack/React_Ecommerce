import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import HeaderBarFunction from '../HeaderBar/Header';
import FooterComponent from "../Footer/FooterComponent";
import './Details.css'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Cookies from 'js-cookie'

 const Alert= (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data: null,
          products: [],
          product:[],
          flag: 0,
          open:false,
          error:false,
          login:false
        }
      }

      async componentDidMount() {
        let catentryId = this.props.match.params.id;
        let pdp_data_url = process.env.REACT_APP_PDP_ENDPOINT;
        pdp_data_url = pdp_data_url+ "/"+catentryId;
        console.log("PDP URL:",pdp_data_url)
        const requestOptions = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          };
        try {
            await fetch(pdp_data_url, requestOptions)
            .then(response => response.json())
            .then((data) => { 
              console.log("Response PDP:---->",data);
              this.setState({ product: data });
             // this.getProduct();
             
            })
            .catch((error) => {
            
             console.error("Error in fetching the PDP: ",error);
            })
        
      
        }
        catch (error) {
          console.log("*****Category error****",error)
          console.error(error)
        }
      }


    getProduct = () =>{
        if(this.props.match.params.id){
          
            const data = this.state.products.filter(item =>{
                return item.id === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };

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

   openAR = (id) =>{
    let ar_url = process.env.REACT_APP_AR_ENDPOINT;
    let arUrl = ar_url+"/"+id;
    window.open(arUrl,"_blank")
 };


    render() {
        const {product} = this.state;
           
      
        return (
            <>
             <div >
            <HeaderBarFunction/>
            <Grid container style={{ backgroundColor: 'whitesmoke'}}> 
           
                {
                    product.map(item =>(
                        <div className="details" key={item.id}>
                        
                <Carousel  navButtonsAlwaysVisible={true} indicators={true} autoPlay={false}>
                  {
                    item.fullImage.map((asset) => (
                      <Card  elevation={0}>
                        <CardMedia
                          component="img"                       
                          image={asset}
                          style={{height:500, width:450}}
                         />
                      </Card >
                    ))
                  }
                </Carousel>
                         
                            <div className="box">
                                <div className="row">                                    
                                    <Typography variant="h4" gutterBottom>
                                       {item.name}
                                    </Typography>
                                </div>
                                <div className="row1">
                                    <p > Special Price</p>
                                </div>
                                <div className="row">
                                    <h5>
                                      <span><strike>₹  {item.listPrice}</strike></span>
                                      <span>  ₹ {item.offerPrice}</span>
                                    </h5>
                                </div>

                                <div className="row2">
                                    <h6>
                                      <span>Brand:</span>
                                      <span> {item.brand}</span>
                                    </h6>
                                </div>
                              
                                <div className="row2" >
                                  
                                <Card style={{maxWidth: 500, backgroundColor:"whitesmoke"}} raised={false}>
                                                                    
                                      <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Available offers
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <ListItem dense button>
                                              <ListItemIcon style={{minWidth:2}}>
                                                <img src="/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" style={{marginRight:2}} />
                                              </ListItemIcon>
                                              <ListItemText id="line1" primary={`Special PriceGet extra 20% off (price inclusive of discount)`} />
                                            </ListItem>
                                            <ListItem dense button>
                                              <ListItemIcon style={{minWidth:2}}>
                                                <img src="/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" style={{marginRight:2}} />
                                              </ListItemIcon>
                                              <ListItemText id="line1" primary={`Buy Now, Get Extra 5% Off On Home Appliances`} />
                                            </ListItem>
                                            <ListItem dense button>
                                              <ListItemIcon style={{minWidth:2}}>
                                                <img src="/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" style={{marginRight:2}} />
                                              </ListItemIcon>
                                              <ListItemText id="line1" primary={`Bank Offer5% Unlimited Cashback on NK Bank Credit Card`} />
                                            </ListItem>
                                            <ListItem dense button>
                                              <ListItemIcon style={{minWidth:2}}>
                                                <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90" width="18" height="18" style={{marginRight:2}} />
                                              </ListItemIcon>
                                              <ListItemText id="line1" primary={`No Cost EMI on NK Bank Credit Card`} />
                                            </ListItem>
                                           
                                        </Typography>
                                      </CardContent>
                                  
                                 </Card>
                                
                                </div>
                                <div className="roWButton">
                                <Link  className="cart" onClick={() => this.addCart(item.catentryId)}>
                                    Add to cart
                                </Link>
                               
                                </div>                       </div>
                               {(item.longDesc != null && item.longDesc != "") &&
                              <AppBar position="relative" style={{backgroundColor:"#333333"}} width="100%">
                                  <Typography variant="h6" style={{flexGrow: 1, lineHeight: 2.6}}>
                                    Description
                                  </Typography>
                            </AppBar>
                             }  
                              {item.longDesc.split("•").filter(item => item!="").map((description) =>
                              <>   
                                 <ListItem button>
                                  <ListItemIcon>
                                    <ArrowRightIcon  style={{color:'green'}}/>
                                  </ListItemIcon>
                                  <ListItemText primary={description} />
                                </ListItem>             
                              </>
                              )
                              }
                            <AppBar position="relative" style={{backgroundColor:"#333333"}} width="100%">
                                  <Typography variant="h6" style={{flexGrow: 1, lineHeight: 2.6}}>
                                    Specification
                                  </Typography>
                            </AppBar>
                               
                        </div>
                    ))
                }
                 </Grid>
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
    <FooterComponent/>
    </div>
            </>
        )
    }
}

export default ProductDetail
