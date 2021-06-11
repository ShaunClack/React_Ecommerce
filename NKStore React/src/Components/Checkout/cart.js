import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import HeaderBarFunction from '../HeaderBar/Header';
import FooterComponent from '../Footer/FooterComponent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const products = [
  { name: 'FabHomeDecor Double Sofa Bed', desc: 'FabHomeDecor Sofa', price: '₹22,646        ' },
  { name: 'LACK Coffee Table', desc: 'Coffee Table', price: '₹1,990      ' }
];
const addresses = ['10 A, Solipalayam Main Road', 'Aval Poondurai', 'Erode', '638115', 'India'];
const payments = [
  { name: 'Payment type', detail: 'Cash On Delivery' }
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  }
}));

export default function Cart() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  let emailId = Cookies.get('sb_emailId');

  let cart_data_url = process.env.REACT_APP_ORDER_ENDPOINT;
  cart_data_url = cart_data_url+ "/getCart"+"?emailId="+emailId;

  useEffect(async () => {
    try
    {
      const result = await axios(
        cart_data_url,
      );
        console.log("CartData:::",result);
      setData(result.data);
      if(result.data.products)
      {
        setProducts(result.data.products);
      }
    }
    catch(error){
      console.error("Error in adding item to cart: ",error);
      setError(true);
    }
  },[]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      setError(false);
    }

    setError(false);
  };

  return (
    <React.Fragment>
        <HeaderBarFunction/>
      <CssBaseline />
      {products.length > 0 ?
        <><Typography variant="h6" gutterBottom justify="center" align="center">
       My Shopping Cart
      </Typography>
      <Grid container spacing={3} justify="center"   alignItems="center">
        <Grid item xs={12} md={6}>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.productName}>
            <ListItemText primary={product.productName} secondary={'Quantity: '+product.quantity} /> 
            <Typography variant="body2" style={{marginLeft:10}}>{product.totalPrice}    </Typography>
            <DeleteIcon/>
          </ListItem>
        ))}
         <ListItem className={classes.listItem} key={'Shipping'}>
            <ListItemText primary={'Shipping'}  />
            <Typography variant="body2">Free</Typography>
            
          </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
          ₹{data.totalPrice}
          </Typography>
        </ListItem>
        
      </List>
      <div className={classes.buttons}><Link to="/checkout"><Button  variant="contained"
                    color="primary" className={classes.button}>
                     Checkout
                 </Button> </Link> </div>
      </Grid>
      </Grid>
      </>
      :
      <>  
        <Typography variant="h6" gutterBottom justify="center" align="center">
          <br/><br/>
            Your Cart is Empty...
        </Typography>
      </>
      }
      <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Error in getting your Cart..
        </Alert>
      </Snackbar>
      <FooterComponent/>
    </React.Fragment>
  );
}