import React, { Component } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      boxShadow:"5px 10px 8px #888888",
      color: theme.palette.text.secondary,
    },
  }));

const HomePageBanner = ()=>{
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
      if (matches) {
    return(
        <>
        
            <Grid container>  
                <Grid container spacing={2}>
                   <Grid item xs={6}>
                                    <img src="images/HomePage/sofu1.jpg" alt="Sofa" height="150" width="150" />
          
                   </Grid> 
                   <Grid item xs={6} >
                         <img src="images/HomePage/sofa1.jpg" alt="Sofa" height="150" width="150"/>  
                    </Grid>
                   <Grid item xs={6} >
                        <img src="images/HomePage/sofu1.jpg" alt="Sofa" height="150" width="150"/>
                   </Grid>
                   <Grid item xs={6} >
     
                        <img src="images/HomePage/sofu1.jpg" alt="Sofa" height="150" width="150"/>
                   </Grid>
                </Grid>             
            </Grid>
        </>
    )

}
else
{
  return(
    <>
    
        <Grid container>  
            <Grid container spacing={2}>
               <Grid item lg={3}>
                    
                      <img src="images/HomePage/homeapp.jpg" alt="Sofa" height="250" width="300" />
                                   </Grid> 
               <Grid item lg={3}>
                    
                    <img src="images/HomePage/sofa1.jpg" alt="Sofa" height="250" width="300"/>  
                    
               </Grid>
               <Grid item lg={3}>
                    
                    <img src="images/HomePage/sofu1.jpg" alt="Sofa" height="250" width="300"/>
                    
               </Grid>
               <Grid item lg={3}>
                    
                    <img src="images/HomePage/sofu1.jpg" alt="Sofa" height="250" width="300"/>
                    
               </Grid>
            </Grid>             
        </Grid>
    </>
)

}
}

export default HomePageBanner;