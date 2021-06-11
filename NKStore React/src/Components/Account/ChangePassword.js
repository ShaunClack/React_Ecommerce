import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Container, ListItem, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { ListGroup, ListGroupItem } from 'reactstrap';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import {FiEdit} from "react-icons/fi";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ChangePassword() {
    const useStyles = makeStyles((theme) => ({
        textfield: {
          '& > *': {
            margin: theme.spacing(1),
            width: '30ch',
          },
        },
      }));
    const classes = useStyles();

    const [currentPassword, setCurrentPassword]= useState(null);
    const [newPassword, setNewPassword]= useState(null);
    const [error, setError]= useState(false);
    const [success, setSuccess]= useState(false);
    const [message, setMessage]= useState(null);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setError(false);
      setSuccess(false);
    };
    

    const updatePassword = async() => {
   
      try{
 
         const body ={
           "currentPassword":currentPassword,
           "newPassword":newPassword
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
       let updateUrl = process.env.REACT_APP_SIGNUP_ENDPOINT;
       updateUrl = updateUrl+"/updatePassword";
          await fetch(updateUrl, requestOptions)
         .then(response => response.json())
         .then(res1=>{
               console.log("Data Updated Successfully",res1)
               
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
<>    
<Container style={{paddingTop:'50px'}}>
      <List style={{background: 'white'}}>
      <form className={classes.textfield} noValidate autoComplete="off">


      <Typography styles={{paddingLeft:'30px'}}>Password Management   <FiEdit/></Typography>
    <ListGroup horizontal style={{paddingLeft:'30px', width:'100%'}}>
      <TextField id="outlined-basic" label="Current Password" variant="outlined" type="password" onChange={(e)=>setCurrentPassword(e.target.value)}/>
      </ListGroup>


      <Typography styles={{paddingLeft:'30px'}}>Change Password </Typography>
    <ListGroup horizontal style={{paddingLeft:'30px', width:'100%'}}>
      <TextField id="outlined-basic" label="Type New Password" variant="outlined"  type="password"/>
      </ListGroup>

    <ListGroup horizontal style={{paddingLeft:'30px', width:'100%'}}>
      <TextField id="outlined-basic" label="Retype New Password" variant="outlined"  type="password" onChange={(e)=>setNewPassword(e.target.value)}/>
      </ListGroup>
    <ListGroup style={{paddingLeft:'30px', width:'10%'}}>
      <Button variant="outlined" color="primary" onClick={(e)=>updatePassword()}>
       Save
      </Button>
      </ListGroup>
    </form>
    </List>
    <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
         Error In Updating Password
      </Alert>
    </Snackbar>

    <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        User password Updated Sucessfully
      </Alert>
    </Snackbar>
    </Container>
  </>
  );
}