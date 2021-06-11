import React from "react";
import SimpleReactFooter from "simple-react-footer";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
export default function FooterComponent()
{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
  
        const description = "To create a better everyday life for the many people and offer a wide range of well-designed, functional products at prices so low that as many people as possible will be able to afford them.";
        const title = "Our Vision And Mission";
        const columns = [
          {
              title: "Resources",
              resources: [
                  {
                      name: "About",
                      link: "/about"
                  },
                  {
                      name: "Careers",
                      link: "/careers"
                  },
                  {
                      name: "Contact",
                      link: "./contact"
                  },
                  {
                      name: "Admin",
                      link: "/admin"
                  }
              ]
          },
          {
              title: "Legal",
              resources: [
                  {
                      name: "Privacy",
                      link: "/privacy"
                  },
                  {
                      name: "Terms",
                      link: "/terms"
                  }
              ]
          },
          {
              title: "Visit",
              resources: [
                  {
                      name: "Locations",
                      link: "/locations"
                  },
                  {
                      name: "Culture",
                      link: "/culture"
                  }
              ]
          }
       ];
       if (matches) {
       return(
          
        <Grid container>  
           <Grid item xs={6}> 
          <SimpleReactFooter 
          columns={columns}
          linkedin="fluffy_cat_on_linkedin"
          facebook="fluffy_cat_on_fb"
          twitter="fluffy_cat_on_twitter"
          instagram="fluffy_cat_live"
          youtube="UCFt6TSF464J8K82xeA?"
          pinterest="fluffy_cats_collections"
          copyright="NKStore"
          iconColor="white"
          backgroundColor="#c85900" // #D3D3D3
          fontColor="white"
          copyrightColor="white"
       />
       </Grid>
       </Grid>
       );
      }
      else
      { return(
          
        <Grid container>  
           <Grid item xs={12}> 
          <SimpleReactFooter 
          description={description} 
          title={title}
          columns={columns}
          linkedin="fluffy_cat_on_linkedin"
          facebook="fluffy_cat_on_fb"
          twitter="fluffy_cat_on_twitter"
          instagram="fluffy_cat_live"
          youtube="UCFt6TSF464J8K82xeA?"
          pinterest="fluffy_cats_collections"
          copyright="NKStore"
          iconColor="white"
          backgroundColor="#c85900" // #D3D3D3
          fontColor="white"
          copyrightColor="white"
       />
       </Grid>
       </Grid>
       );
      }
}



