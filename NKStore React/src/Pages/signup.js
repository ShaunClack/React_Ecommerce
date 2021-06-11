import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import PasswordStrengthBar from 'react-password-strength-bar';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import HeaderBarFunction from '../Components/HeaderBar/Header';
import FooterComponent from "../Components/Footer/FooterComponent";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import List from '@material-ui/core/List';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Cookies from 'js-cookie'
import { FaUserCircle } from "react-icons/fa";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    //margin: theme.spacing(1),
   //backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  // State Variable
  const [firstName, setFirstName]= useState(null); //firstname- form input  || setFirstName-- handlefunction
  const [lastName, setLastName]= useState(null); 
  const [emailId, setEmailId]= useState(null);
  const [mobileNumber, setMobileNumber]= useState(null);
  const [password, setPassword]= useState(" ");
  const [gender, setGender]= useState(null);
  const [passwordMeter, setPasswordMeter]= useState(false);
  const [error, setError]= useState(false);
  const [success, setSuccess]= useState(false);
  const handleFirstNameChange = (e) => {   
    var value = e.target.value;    
    setFirstName(value);
    //this.handleSubmit(value);
  }

  const handleLastNameChange = (e1) => {
    var value = e1.target.value;    
    setLastName(value);
    //this.handleSubmit(value);
  }

  const handleEmailChange = (e) => {
    var value = e.target.value;    
    setEmailId(value);
    //this.handleSubmit(value);
  }

  const handlePasswordChange = (e) => {
    var value = e.target.value;   

    setPassword(value);
    console.log("Password::",password)
    //handleSubmit(value);
  }

  const setPasswordIn = (e) => {
    var value = e.target.value;   

    setPassword(value);
    console.log("Password::",password)
    setPasswordMeter(true);
    
  }
  
  const setPasswordOut = (e) => {
    
    setPasswordMeter(false);
   
  }

  const handleMobileChange =(e) =>{
    setMobileNumber(e.target.value);
  }
  const handleGender = (e)=>{
    setGender(e.target.value);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setError(false);
    setSuccess(false);
  };

  
  const handleSignUp = async() => {
    console.log("Entering SignUp");
     try{

        const body ={
          "firstName":firstName,
          "lastName":lastName,
          "emailId":emailId,
          "password":password,
          "mobileNumber":mobileNumber,
          "gender":gender
        }
        console.log("Body::",body)
        const requestOptions = {
          method: 'POST',
          credentials: 'include',   
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
      };
      let signpurl = process.env.REACT_APP_SIGNUP_ENDPOINT;
      signpurl = signpurl+"/register";
         await fetch(signpurl, requestOptions)
        .then(response => response.json())
        .then(res1=>{
              console.log("Data Inserted",res1)
              setSuccess(true);
              if(res1.error){
                setError(true);
                //setMessage(res1.error);
              }
              else{
                Cookies.set('sb_firstName', res1.firstName);
                Cookies.set('sb_lastName', res1.lastName);
                Cookies.set('sb_emailId', res1.emailId);
                Cookies.set('sb_loggedIn',"true");
                console.log("Cookie::", res1.headers)
                window.location.replace("/home");
               // Cookies.set('access_token', res1.headers['stoken'])
                //window.location.replace("/home");
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
    <div style={{backgroundColor:"whitesmoke"}}>
    <HeaderBarFunction/>
    <Container component="main" maxWidth="xs" style={{backgroundColor:"white"}}>
      <CssBaseline />
      <div className={classes.paper}>
       
          <Grid container style={{backgroundColor:""}}spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Names"
                onChange={handleFirstNameChange} 
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={handleLastNameChange} 
                autoComplete="lname"
              />
            </Grid>


          <Grid item xs={12}>
  
              <Typography>Gender</Typography>
              
              <FormControl component="fieldset">
              <RadioGroup aria-label="gender" name="gender1" onClick={handleGender}>
              <ListGroup horizontal>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
              </ListGroup>
              </RadioGroup>
              </FormControl>
              
          </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleEmailChange} 
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Mobile Number"
                name="email"
                onChange={handleMobileChange} 
              />
              </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handlePasswordChange} 
                autoComplete="current-password"
                onFocus={setPasswordIn}
                onBlur={setPasswordOut}
              />
              {(passwordMeter)?
              <PasswordStrengthBar password={password} />
               :<></>} {/* Ternary Operator */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Retype Password"
                type="password"
                id="password"
                onChange={handlePasswordChange} 
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            className={classes.submit}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2" style={{color:"green"}}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
      
      </div>
      <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        An Error has Occured
      </Alert>
    </Snackbar>

    <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        User Created Sucessfully
      </Alert>
    </Snackbar>
    </Container>
    <FooterComponent/>
    </div>
  );
}