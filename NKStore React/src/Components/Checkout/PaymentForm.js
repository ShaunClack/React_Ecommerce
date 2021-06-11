import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment methods
      </Typography>
      {/* <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
            <Typography variant="subtitle1"  gutterBottom>
                No need to worry about payment for now! You can place your order now and we will collect the payment at your door step during the product delivery.
            </Typography>
        </Grid>
      </Grid> */}
      <Grid container spacing={3}>
      <Grid item xs={12}>
        <RadioGroup aria-label="paymentmethod" name="paymentmethod" >
        <FormControlLabel value="card" control={<Radio />} label="VISA / Master Card / Rupay" />
        
      </RadioGroup>
      </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
        <RadioGroup aria-label="paymentmethod" name="paymentmethod" >
        <FormControlLabel value="Cash on Delivery" control={<Radio />} label="Cash On Delivery" />
        
      </RadioGroup>
  </Grid>
      </Grid>
    </React.Fragment>
  );
}