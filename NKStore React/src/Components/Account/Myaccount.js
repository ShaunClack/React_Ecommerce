import React, { Component } from 'react';
import HeaderBarFunction from '../HeaderBar/Header';
import FooterComponent from "../Footer/FooterComponent";
import Grid from '@material-ui/core/Grid';
import MySideMenu from "../Account/SlideMenu";
import AddressInfo from './AddressInfo';
import AccountInfo from './AccountInfo';
import ChangePassword from './ChangePassword';
export default function Accountdetails(){

    const[selectedItem, setSelectedItem]= React.useState("Myaccount");

    const selectedMenu = (childData)=>{
        console.log("Menu Selected: ",childData);
        setSelectedItem(childData);
    }

    return(
        
    <div style={{overflow:"hidden"}}>
        <HeaderBarFunction/>
        <Grid container style={{ backgroundColor: 'whitesmoke'}}> 
        <Grid item xs={3}>
        <MySideMenu onMenuChange={selectedMenu} />

       
        
       
   
    </Grid>
    <Grid item xs={9}>
    {(() => {
        if (selectedItem=="address") {
          return (
            <><AddressInfo/></>
          )
        } else if (selectedItem=="profile") {
          return (
            <><AccountInfo/></>
          )
        }
        else if (selectedItem=="loginSecurity") {
            return (
              <><ChangePassword/></>
            )
          }
           else {
          return (
            <><AccountInfo/></>
          )
        }
      })()}
    
    </Grid>
    </Grid>
    <FooterComponent/>
    </div>
    );
    
}