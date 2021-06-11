import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { BsFillBagFill } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";
import { BsFillShieldLockFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { MdCardGiftcard } from "react-icons/md";
import { MdCardMembership } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import Cookies from 'js-cookie';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 400,
    fontSize:"12px",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  listText:{
      fontSize:"12px"
  }
}));

export default function MySideMenu(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [selectedTab, setSelectedTab] = React.useState("Myaccount");

  const handleClick = () => {
    setOpen(!open);
  };

 const handleSelectedTab = (e) =>{
       console.log("Selected menu:",e);
        props.onMenuChange(e);
 }

  return ( 
<>    <Container style={{paddingTop:'20px'}}>
      <List style={{background: 'white',className:"rounded mb-0"}}>
      <ListItem alignItems="flex-start"style={{borderBottomWidth: 0}} >
        <ListItemAvatar>
          <Avatar src="/images/Avatar/1.svg" />
        </ListItemAvatar>
        <ListItemText
          primary="Hello,"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                {Cookies.get("sb_firstName") + " "  + Cookies.get("sb_lastName")} 
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      </List>
      </Container>


      <Container style={{paddingTop:'20px',className:"rounded mb-0"}}>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
      style={{fontSize:"12px",background: 'white'}}
    >       
    
      <ListItem button>
        <ListItemIcon>
          <BsFillGearFill style={{fontSize:'20px', color:'#c85900'}}/>
        </ListItemIcon>
        <ListItemText primary="ACCOUNT SETTINGS" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>

        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={()=>handleSelectedTab("profile")}>
            <ListItemIcon>
              <BsFillPersonCheckFill style={{fontSize:'20px', color:'#c85900'}} />
            </ListItemIcon>
            <ListItemText primary="Profile Information" />
          </ListItem>
        </List>

        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={()=>handleSelectedTab("address")}>
            <ListItemIcon>
              <BsGeoAlt style={{fontSize:'20px', color:'#c85900'}} />
            </ListItemIcon>
            <ListItemText primary="Your Addresses" />
          </ListItem>
        </List>

        <List component="div" disablePadding onClick={()=>handleSelectedTab("loginSecurity")}>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <BsFillShieldLockFill style={{fontSize:'20px', color:'#c85900'}} />
            </ListItemIcon>
            <ListItemText primary="Login and Security" />
          </ListItem>

        </List>
    </Collapse>

    <ListItem button onClick={()=>handleSelectedTab("myOrders")}>
        <ListItemIcon>
        <BsFillBagFill style={{fontSize:'20px', color:'#c85900'}}/>
        </ListItemIcon>
        <ListItemText primary="MY ORDERS"/>
      </ListItem>

      <ListItem button onClick={()=>handleSelectedTab("payments")}>
        <ListItemIcon>
          <MdPayment style={{fontSize:'25px', color:'#c85900'}}/>
        </ListItemIcon>
        <ListItemText primary="PAYMENTS" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <MdCardGiftcard style={{fontSize:'20px', color:'#c85900'}} />
            </ListItemIcon>
            <ListItemText primary="Gift Cards" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <MdCardMembership style={{fontSize:'20px', color:'#c85900'}} />
            </ListItemIcon>
            <ListItemText primary="Saved Cards" />
          </ListItem>
       
        </List>
    </Collapse>

    <ListItem button>
        <ListItemIcon>
        <AiOutlineLogout style={{fontSize:'20px', color:'#c85900'}}/>
        </ListItemIcon>
        <ListItemText primary="LOGOUT"/>
      </ListItem>
    </List>
    </Container>
  </>
  );
}