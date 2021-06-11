import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import { ListGroup, ListGroupItem } from 'reactstrap';
import TextareaAutosize from 'react-textarea-autosize';
import { makeStyles } from '@material-ui/core/styles';
import { IoAdd } from "react-icons/io5";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function AddAddress() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [pinCode, setPinCode] = React.useState("");
  const [locality, setLocality] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [landMark, setLandMark] = React.useState("");
  const [alternateNumber, setAlternateNumber] = React.useState("");
  const [addressType, setAddressType] = React.useState("");
  const [error, setError]= useState(false);
  const [success, setSuccess]= useState(false);
  const [message, setMessage]= useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setError(false);
    setSuccess(false);
  };
  
  const addAddress = async() => {
   
    try{

       const body ={       
        "name":name,
         "mobileNumber":mobileNumber,
         "pinCode":pinCode,
         "locality":locality,
          "address":address,
          "city":city,
          "state":state,
          "landMark":landMark,
          "alternateNumber":alternateNumber,
          "addressType":addressType         
       }
       console.log("Body::",body)
       const requestOptions = {
         method: 'POST',
         credentials: 'include',   
         headers: { 
           'Content-Type': 'application/json',
            'loggedIn':true },
         body: JSON.stringify(body)
     };
     let addressUrl = process.env.REACT_APP_ADDRESS_ENDPOINT;
     addressUrl = addressUrl+"/addaddress";
        await fetch(addressUrl, requestOptions)
       .then(response => response.json())
       .then(res1=>{
             console.log("Address Inserted",res1)
             
             if(res1.error){
               setError(true);
               //setMessage(res1.error);
             }
             else{
               setSuccess(true);       
             
           }
         }
         )
         .catch(function(err) {
           console.info(err);
           setError(true);
           //window.location.replace("/home");
       });
      //let resrpp = await res.json();
         // console.log("RESSS",resrpp)
       

    }
    catch(error)
    {
     setError(true);
     setSuccess(false);
       console.log("Error",error);
    }

 }

  return (
    <div style={{paddingTop:'20px'}}>
     <Button variant="outlined" color="primary" onClick={handleClickOpen} >
     <IoAdd/>Add New Address
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Add Address
        </DialogTitle>
        <DialogContent dividers style={{overflow:"hidden"}}>
          
     <List> {/* List 1 */}

      <ListGroup horizontal style={{paddingLeft:'30px', width:'100%'}}>
        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e)=>setName(e.target.value)}/>
        <TextField id="outlined-basic" label=" Mobile Number" variant="outlined" style={{paddingLeft:'10px'}} onChange={(e)=>setMobileNumber(e.target.value)}/>
      </ListGroup>

      <ListGroup horizontal style={{paddingLeft:'30px',paddingTop:'20px', width:'100%'}}>
        <TextField id="outlined-basic" label="Pin" variant="outlined" onChange={(e)=>setPinCode(e.target.value)}/>    
        <TextField id="outlined-basic" label=" Locality" variant="outlined" style={{paddingLeft:'10px'}} onChange={(e)=>setLocality(e.target.value)}/>
      </ListGroup>


      <ListGroup  style={{paddingLeft:'30px',paddingTop:'20px', width:'100%'}}>
      <TextField id="outlined-basic" label="Address" variant="outlined" onChange={(e)=>setAddress(e.target.value)}/>    
      </ListGroup>

      <ListGroup horizontal style={{paddingLeft:'30px',paddingTop:'20px', width:'100%'}}>
        <TextField id="outlined-basic" label="City/District" variant="outlined" onChange={(e)=>setCity(e.target.value)}/>
        <TextField id="outlined-basic" label=" State" variant="outlined" style={{paddingLeft:'10px'}} onChange={(e)=>setState(e.target.value)}/>
      </ListGroup>

      <ListGroup horizontal style={{paddingLeft:'30px',paddingTop:'20px', width:'100%'}}>
        <TextField id="outlined-basic" label="Landmark" variant="outlined" onChange={(e)=>setLandMark(e.target.value)}/>
        <TextField id="outlined-basic" label=" Alternative Number" variant="outlined" style={{paddingLeft:'10px'}} onChange={(e)=>setAlternateNumber(e.target.value)}/>
      </ListGroup>

      <Typography style={{paddingLeft:'30px',paddingTop:'30px'}}>Address Type</Typography>
      <ListGroup  style={{paddingLeft:'30px', width:'100%'}}  onChange={(e)=>setAddressType(e.target.value)}>
        <FormControl component="fieldset">
        <RadioGroup aria-label="type" name="type">
        <List> 
            <FormControlLabel value="Home" control={<Radio />} label="Home" />
            <FormControlLabel value="Work" control={<Radio />} label="Work" />
        </List>
        </RadioGroup>
        </FormControl>
      </ListGroup>
        </List>{/* List 1 end */}
         </DialogContent>
            <DialogActions>
                 <Button autoFocus onClick={addAddress} color="primary">
                    Save
                 </Button>
            </DialogActions>
            </Dialog>

            <Snackbar open={error} autoHideDuration={3000} onClose={handleSnackBarClose}>
      <Alert onClose={handleSnackBarClose} severity="error">
         Error In Adding User Address
      </Alert>
    </Snackbar>

    <Snackbar open={success} autoHideDuration={3000} onClose={handleSnackBarClose}>
      <Alert onClose={handleSnackBarClose} severity="success">
        Address Added Suucessfully
      </Alert>
    </Snackbar>
    </div>
  );
}
