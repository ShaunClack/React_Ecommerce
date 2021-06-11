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
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Cookies from 'js-cookie';

export default function AccountInfo() {

  const [error, setError]= useState(false);
  const [success, setSuccess]= useState(false);
  const [message, setMessage]= useState(null);
  const [firstName, setFirstName]= useState(null); //firstname- form input  || setFirstName-- handlefunction
  const [lastName, setLastName]= useState(null); 
  const [emailId, setEmailId]= useState(null);
  const [mobileNumber, setMobileNumber]= useState(null);
  const [gender, setGender]= useState(null);
  
   function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  useEffect(() => {
    getProfileInfo();
  },[]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setError(false);
    setSuccess(false);
  };
  

  const getProfileInfo = async() => {
    try{


      const requestOptions = {
        method: 'GET',
        credentials: 'include',  
        loggedIn: 'true',    
        headers: new Headers(
          { 
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'loggedIn':true
          })
    };
    let getInfoUrl = process.env.REACT_APP_SIGNUP_ENDPOINT;
    getInfoUrl = getInfoUrl+"/getMyInfo";
   
       await fetch(getInfoUrl, requestOptions)
      .then(response => response.json())
      .then(res1=>{
            console.log("Get Info Response",res1)
            if(res1.error){
              setError(true);
              //setMessage(res1.error);
            }
            else{
                    setFirstName(res1.firstName);
                    setLastName(res1.lastName);
                    setEmailId(res1.emailId);
                    setMobileNumber(res1.mobileNumber);
                    setGender(res1.gender);
                    console.log("Resppp",res1);        
            }           
          }
        )
        .catch(function(err) {
          console.info(err);
          setError(true);
          //setMessage();
          //window.location.replace("/home");
      });
    
   }
   catch(error)
   {
    setError(true);
    setSuccess(false);
      console.log("Error",error);
   }

  }

  const updateUser = async() => {
   
     try{

        const body ={
          "firstName":firstName,
          "lastName":lastName,
          "emailId":emailId,
          "mobileNumber":mobileNumber,
          "gender":gender
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
      updateUrl = updateUrl+"/update";
         await fetch(updateUrl, requestOptions)
        .then(response => response.json())
        .then(res1=>{
              console.log("Data Inserted",res1)
              
              if(res1.error){
                setError(true);
                //setMessage(res1.error);
              }
              else{
                setSuccess(true);
                Cookies.set('sb_firstName', res1.firstName);
                Cookies.set('sb_lastName', res1.lastName);
              
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


    const useStyles = makeStyles((theme) => ({
        textfield: {
          '& > *': {
            margin: theme.spacing(1),
            width: '30ch',
          },
        },
      }));
    const classes = useStyles();

  return ( 
<>    
<Container style={{paddingTop:'50px'}}>
      <List style={{background: 'white'}}>
      
      <Typography styles={{paddingLeft:'60px'}}>Personal Information <FiEdit/></Typography>
    <ListGroup horizontal style={{paddingLeft:'30px', width:'100%'}}>
      <TextField id="outlined-basic" variant="outlined"  value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
      <TextField id="outlined-basic"  variant="outlined" style={{paddingLeft:'10px'}} value={lastName}  onChange={(e)=>setLastName(e.target.value)}/>
      </ListGroup>

      <Typography styles={{paddingLeft:'30px'}}>Your Gender <FiEdit/></Typography>
      <ListGroup  style={{paddingLeft:'30px', width:'100%'}}>
      <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={(e)=>setGender(e.target.value)}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
      </ListGroup>

      <Typography styles={{paddingLeft:'30px'}}>Email Address </Typography>
    <ListGroup horizontal style={{paddingLeft:'30px', width:'100%'}}>
      <TextField id="outlined-basic" variant="outlined" disabled value={emailId}/>
      </ListGroup>

      <Typography styles={{paddingLeft:'30px'}}>Mobile Number <FiEdit/></Typography>
    <ListGroup horizontal style={{paddingLeft:'30px', width:'100%'}}>
      <TextField id="outlined-basic"  variant="outlined"  value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/>
      </ListGroup>

      <Button
            type="submit"
            Width='80px'
            variant="outlined" 
            color="primary"
            className={classes.submit}
            onClick={updateUser}
            style={{ width:80}}
          >
            Save
          </Button>

    
    </List>
    
    <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
         Error In Upating User Details
      </Alert>
    </Snackbar>

    <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        User Updated Sucessfully
      </Alert>
    </Snackbar>
    </Container>
  </>
  );
}