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
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Cookies from 'js-cookie';
import HeaderBarFunction from '../Components/HeaderBar/Header';
import FooterComponent from "../Components/Footer/FooterComponent";

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
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  // State Variable
  const [emailId, setEmailId]= useState(null);
  const [password, setPassword]= useState(" ");
  const [error, setError]= useState(false);
  const [success, setSuccess]= useState(false);
  const [message, setMessage]= useState(null);
  

  const handleEmailChange = (e) => {
    var value = e.target.value;    
    setEmailId(value);
  }

  const handlePasswordChange = (e) => {
    var value = e.target.value;   
    setPassword(value);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setError(false);
    setSuccess(false);
  };
  
  const handleLogin = async() => {
    try{

      const body ={
       
        "emailId":emailId,
        "password":password
      
      }
     
      const requestOptions = {
        method: 'POST',
        credentials: 'include', 
        loggedIn:'false',      
        body: JSON.stringify(body),
        headers: new Headers(
          { 
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          })
    };
    let signpurl = process.env.REACT_APP_SIGNUP_ENDPOINT;
      signpurl = signpurl+"/login";
       await fetch(signpurl, requestOptions)
      .then(response => response.json())
      .then(res1=>{
            console.log("Login Response",res1)
            if(res1.error){
              setError(true);
              setMessage(res1.error);
            }
            else{
              Cookies.set('sb_firstName', res1.firstName);
              Cookies.set('sb_lastName', res1.lastName);
              Cookies.set('sb_emailId', res1.emailId);
              Cookies.set('sb_loggedIn',"true");
              console.log("Cookie::", res1.headers)
             // Cookies.set('access_token', res1.headers['stoken'])
              window.location.replace("/home");
            }           
          }
        )
        .catch(function(err) {
          console.info(err);
          setError(true);
          setMessage();
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

  return (
    <div style={{backgroundColor:"whitesmoke"}}>
      <HeaderBarFunction/>
    <Container component="main" maxWidth="xs" style={{backgroundColor:"white"}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
       
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
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
                label="Password"
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
            onClick={handleLogin}
          >
            Login in
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signup" variant="body2" style={{color:'green'}}>
                Dont have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
      
      </div>
      <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        {message}
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