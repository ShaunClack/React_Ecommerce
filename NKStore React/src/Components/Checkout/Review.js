import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const products = [
  { name: 'FabHomeDecor Double Sofa Bed', desc: 'FabHomeDecor Sofa', price: '₹22,646' },
  { name: 'LACK Coffee Table', desc: 'Coffee Table', price: '₹1,990' },
  { name: 'Shipping', desc: '', price: 'Free' },
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
}));

export default function Review() {
  
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
      console.error("Error in getting items: ",error);
      setError(true);
    }
  },[]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.productName}>
            <ListItemText primary={product.productName}  secondary={'Quantity: '+product.quantity} />
            <Typography variant="body2">{product.totalPrice}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
          ₹{data.totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>Naveen Kumar</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}