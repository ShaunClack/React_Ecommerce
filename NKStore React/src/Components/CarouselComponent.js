import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


export default function CoarouselImage(props)
{

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            url:"images/Banner/carousel_3.jpg"
        },
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            url:"images/Banner/carousel_2.jpg"
        },
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            url:"images/Banner/carousel_1.jpg"
        },
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            url:"images/Banner/carousel_4.jpg"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
    if (matches) {
    return (
        <Paper>
            
            <Paper variant="outlined" style={{width: 'auto', height:'auto'}}>
                <img src={props.item.url} width='360' height='200'/>
            </Paper>
            
        </Paper>
    )
}
else
{
    return (
        <Paper style={{paddingTop:'20px'}}>
            
            <Paper variant="outlined" style={{width: 'auto', height:'auto'}}>
                <img src={props.item.url} width='1550' height='370'/>
            </Paper>
            
        </Paper>
    )
}
}
