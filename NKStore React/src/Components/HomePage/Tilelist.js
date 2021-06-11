import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core/'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Container } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import jsonData from './tiledata.json';
import Carousel from 'react-grid-carousel';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "30px",
  },
  media: {
    height: 300,
    paddingTop: '56.25%', // 16:9
  },
  product:
  {
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: 1,
    color: "#282c3f",
    fontFamily: "Mulish",
    
  },
  heading:
  {
    fontWeight: 'bold',
    lineHeight: 1,
    color: "#282c3f",
    paddingTop: "30px",
    fontFamily: "Mulish",
  }
}));

export default function RecipeReviewCard() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));


  const Overcarousel=()=>{
    console.log("Chitu")
  }
  const classes = useStyles();

  if (matches) {
  return (
    <>
      <Typography variant='h6' className={classes.heading}>
       Deal of the day
      </Typography>
      {/*<Grid
                container
                spacing={0}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
      >*/}
  <Carousel cols={1} showDots gap={10}   loop hideArrow={false}>
      {

jsonData.map((product, i)=>{
    return(
      <Carousel.Item key={i}>
      <Grid item xs={12}>
    <Card className={classes.root} display="inline" >
      <CardMedia onMouseOver={Overcarousel}
        className={classes.media}
        image={product.imagePath}
      />
      <CardContent>
        <Typography  component="p"  className={classes.product}>
            {product.productName}
        </Typography>
        <Typography  component="p"  className={classes.description}>
            {product.shortDescription}
        </Typography>
        <Container style={{paddingTop:10 }}>
        <Typography display="inline" style={{textDecoration:'line-through',paddingLeft:0}}> 
            $ {product.listPrice}
        </Typography>
        <Typography display="inline" style={{paddingLeft:10}}>  
           $ {product.offerPrice}
        </Typography>
        </Container>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <AddShoppingCartIcon/>
      </CardActions>
    </Card>
    </Grid>
    </Carousel.Item>)})
}</Carousel>
    </>
  );
}
else
{
  return (
    <>
      <Typography variant='h6' className={classes.heading}>
      Suggested for You
      </Typography>
      {/*<Grid
                container
                spacing={0}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
      >*/}
               <Carousel cols={5} showDots loop>
      {

jsonData.map((product, i)=>{
    return(
      <Carousel.Item key={i}>
      <Grid item >
    <Card className={classes.root} display="inline" >
      <CardMedia onMouseOver={Overcarousel}
        className={classes.media}
        image={product.imagePath}
      />
      <CardContent>
        <Typography  component="p"  className={classes.product}>
            {product.productName}
        </Typography>
        <Typography  component="p"  className={classes.description}>
            {product.shortDescription}
        </Typography>
        <Container style={{paddingTop:10 }}>
        <Typography display="inline" style={{textDecoration:'line-through',paddingLeft:0}}> 
        ₹{product.listPrice}
        </Typography>
        <Typography display="inline" style={{paddingLeft:10}}>  
        ₹{product.offerPrice}
        </Typography>
        </Container>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <AddShoppingCartIcon/>
      </CardActions>
    </Card>
    </Grid>
    </Carousel.Item>)})
}</Carousel>
    </>
  );
}
}