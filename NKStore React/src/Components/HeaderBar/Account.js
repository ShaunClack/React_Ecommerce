import React, { useState, useEffect} from "react";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import { grey } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { CgProfile} from "react-icons/cg";
import { MdFavoriteBorder} from "react-icons/md";
import { FaCartPlus} from "react-icons/fa";
import { RiLogoutCircleRLine} from "react-icons/ri";
import Cookies from 'js-cookie'

import TextareaAutosize from 'react-textarea-autosize';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
    left:568

  },
  paper: {
    padding: theme.spacing(1),
    placement:'left',

  },
}));

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userName, setUserName] =  React.useState(null);
  const [loggedIn, setLoggedIn] =  React.useState(false);

  useEffect(() => {
    let loggedIn = Cookies.get('sb_loggedIn');
    console.log("LoggedIn:",loggedIn)
    let user = Cookies.get('sb_firstName')+" "+Cookies.get('sb_lastName')
    console.log("User Name: ",user);
    if(loggedIn==="true")
    {
      setLoggedIn(true);
      let user = Cookies.get('sb_firstName')+" "+Cookies.get('sb_lastName')
      console.log("User Name: ",user);
      setUserName(user);
    }
  },[]);
  
const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const logOutMe = () => {
    console.log("Coming Insdie Logout")
    Cookies.remove('sb_lastName', { path: '/' });
    Cookies.remove('sb_emailId', { path: '/' });
    Cookies.remove('sb_firstName', { path: '/' });
    Cookies.remove('stoken', { path: '/' });
    Cookies.remove('sb_loggedIn', { path: '/' });  
    window.location.replace("/home");  
  };

  const open = Boolean(anchorEl);

  return (
    <div>
        
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onClick={handlePopoverOpen}
      >
      <PersonIcon style={{float:'right',fontSize:'35px', paddingLeft:'5px', color:'white'}}  />
      </Typography>
      <Popover
      style={{marginLeft:"10px"}}
        id="mouse-over-popover"
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={'left'}
        onClose={handlePopoverClose}
        style={{ marginTop: 52 }}
        anchorOrigin={{
          vertical: 'bottom'
        }}
        transformOrigin={{
          vertical: 'top'
        }}
      >
    {(loggedIn)?
     <>
    
    
       <Typography > Welcome {userName}</Typography>
       <Divider />
       <Typography> <CgProfile style={{fontSize:'20px',color:"green"}}/><Link to="/Myaccount" style={{fontSize:'18px',textDecoration:'none'}}>  My Account</Link></Typography>
       <Divider />
       <Typography> <MdFavoriteBorder style={{fontSize:'20px',color:"green"}}/><Link to="" style={{fontSize:'18px',textDecoration:'none'}}>  My Wishlist</Link></Typography>
       <Divider />
       <Typography> <FaCartPlus style={{fontSize:'20px',color:"green"}}/><Link to="" style={{fontSize:'18px',textDecoration:'none'}}>  My Orders</Link></Typography>
       <Divider />
       <Typography> <RiLogoutCircleRLine style={{fontSize:'20px',color:"green"}}/><Link to="#" style={{fontSize:'18px',textDecoration:'none'}} onClick={ logOutMe}>  Logout</Link></Typography>
   </>
      :      
        <>
        <div>
            <Button variant="outlined" color="primary" href="/login" >
            Sign In
            </Button>  
         </div>
    
       <Typography >New Customer? <Link style={{textDecoration:'none'}} to="/signup">Start Here</Link></Typography>
       <Divider />
       <Typography> <CgProfile style={{fontSize:'20px',color:"green"}}/><Link to="/Myaccount" style={{fontSize:'18px',textDecoration:'none'}}>  My Account</Link></Typography>
       <Divider />
       <Typography> <MdFavoriteBorder style={{fontSize:'20px',color:"green"}}/><Link to="/Myaccount" style={{fontSize:'18px',textDecoration:'none'}}>  My Wishlist</Link></Typography>
       <Divider />
       <Typography> <FaCartPlus style={{fontSize:'20px',color:"green"}}/><Link to="/Myaccount" style={{fontSize:'18px',textDecoration:'none'}}>  My Orders</Link></Typography>
       <Divider />
      
        </>
      }
       

      </Popover>
    </div>
  );
}