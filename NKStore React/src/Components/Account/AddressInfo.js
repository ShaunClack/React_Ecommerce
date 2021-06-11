import React, {useState, useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { Container } from '@material-ui/core';
import AddAddress from '../Account/AddAddress'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    minHeight:275,
    maxHeight:325,
    minWidth: 200,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function AddressInfo() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [pinCode, setPinCode] = React.useState("");
  const [locality, setLocality] = React.useState("");
  const [address, setAddress] = React.useState([]);
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [landMark, setLandMark] = React.useState("");
  const [alternateNumber, setAlternateNumber] = React.useState("");
  const [addressType, setAddressType] = React.useState("");
  const [error, setError]= useState(false);
  const [success, setSuccess]= useState(false);
  const [message, setMessage]= useState(null);

  useEffect(() => {
    getAddressInfo();
  },[]);

  const getAddressInfo = async() => {
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
    let addressUrl = process.env.REACT_APP_ADDRESS_ENDPOINT;
     addressUrl = addressUrl+"/getaddress";
     
       await fetch(addressUrl, requestOptions)
      .then(response => response.json())
      .then(res1=>{
            console.log("Get Info Response",res1)
            if(res1.error){
              setError(true);
              //setMessage(res1.error);
            }
            else{
                    setAddress(res1);
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


  return (
    <>
    <Container style={{paddingTop:'50px'}}>
     <div>
      <List style={{background: 'whitesmoke'}}> {/* Parent List Start*/}

      <Typography styles={{paddingLeft:'30px'}}>Manage Addresses</Typography>
    <ListGroup>
      <AddAddress/>
    </ListGroup>
    <Grid container spacing={3}>
    {address.map(item =>{
    return(
      <Grid item xs><ListGroup>
      <List style={{background: 'whitesmoke'}}>        
      <Card className={classes.root}>
      <CardContent>
     <List horizontal={true}>       
      <Typography variant="body2" color="textSecondary" component="p">
          {item.addressType}
      </Typography>
      <Typography variant="body2" component="p">
          {item.name}
          <br/>
          {item.address}
          <br />
          Locality: {item.landMark}
          <br />
          LandMark: {item.landMark}
          <br />
          {item.city}
          <br/>
          {item.state} - {item.pinCode}
          <br/>
          Mobile :{item.mobileNumber}
          <br/>Alterante Number: {item.alternateNumber}
          
      </Typography>
          </List>
       
      </CardContent>
      </Card>
      </List>
    </ListGroup></Grid>)
    }
    )}</Grid>
    </List>
      </div>
    </Container>
     
      </>
    
  );
}
