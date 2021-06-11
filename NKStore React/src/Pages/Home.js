import React, { Component } from 'react';
import HeaderBarFunction from '../Components/HeaderBar/Header';
import CarouselImage from "../Components/CarouselComponent";
import { Container } from '@material-ui/core';
import HomePageBanners from "../Components/HomePage/HomePageBanners";
import FooterComponent from "../Components/Footer/FooterComponent";
import RecipeReviewCard from "../Components/HomePage/Tilelist";
import Grid from '@material-ui/core/Grid';
export default function home(){
    return(
        <Grid Container style={{background: 'whitesmoke'}}> 
        <Grid item xs={12}>
    <div style={{overflow:"hidden"}}>
        <HeaderBarFunction />
        <CarouselImage />
                <Container style={{background: 'white'}}>
                <RecipeReviewCard/>
                </Container>
        <FooterComponent/>
       
    </div>
    </Grid>
    </Grid>
    );
    
}