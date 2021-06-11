import React, { useState } from "react";
import "./HeaderBarStyles.css";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../mylogo.png';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NavigationComponent from './NavMenu';
import { grey } from '@material-ui/core/colors';
import SimplePopover from './Account';
import { Link } from 'react-router-dom'
import SearchBar from "material-ui-search-bar";
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function HeaderBarFunction() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));


    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
      }));
      const classes = useStyles();      
      if (!matches) {
      return ( 
  <div>
  <AppBar position="static">
  <Toolbar variant="dense" style={{background:'#c85900'}}>
  <Typography  color="inherit" style={{width:'100%',height:'100%'}} >  
         <a href="/home">
        <img src={logo} className="App-logo" alt="logo" style={{width:'50%',height:'100%'}}/>
        </a>   
    </Typography>  
    <Typography  color="inherit" style={{width:'100%'}} >
            <NavigationComponent/>
    </Typography>  
    <Toolbar variant="dense" style={{background:'#c85900',paddingBottom:'20px',paddingTop:'10px',width: '175%',height:'50%'}}>
                
              <Input 
                    style={{color:'white'}}
                    placeholder="What are you looking for ?"
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="end" variant="outlined">
                        <SearchIcon style={{color:'white'}}/>
                      </InputAdornment>
                    }
              />
              </Toolbar>
    <Typography  color="inherit" style={{width:'15%'}}>    
        <SimplePopover/>
    </Typography> 
    <Typography  color="inherit" style={{width:'15%'}}>
    <Link to="/cart">   <ShoppingCartIcon style={{float:'right',paddingLeft:'5px',fontSize:'35px', color: 'white'}}></ShoppingCartIcon></Link>
    </Typography>               
  </Toolbar>
  
</AppBar>    
   </div>

 );
      }
      else
      {
          return( /* Mobile View */
          <>
            <AppBar position="static">
              <Toolbar variant="regular" style={{background:'#c85900'}}> {/*#007f2D*/}
              <Typography  color="inherit" style={{width:'30%'}} >
                        <NavigationComponent/>
              </Typography> 
              <Typography  color="inherit" style={{width:'65%'}} >     
                <a href="/home">
                 <img src={logo} className="App-logo" alt="logo" />
                </a>   
                </Typography> 
                <Typography  color="inherit" style={{width:'100%'}}>       
                    <SimplePopover/>                  
                    <ShoppingCartIcon style={{float:'right',fontSize:'35px', paddingLeft:'5px', color:'white'}} />
                </Typography> 
              </Toolbar>
              <Toolbar variant="dense" style={{background:'beige',paddingBottom:'20px',paddingTop:'10px'}}>
                <SearchBar
                  value="Search" style={{width: '100%',textAlign:'center'}}                
                />
              </Toolbar>
            </AppBar>  
          </>);
      }
}