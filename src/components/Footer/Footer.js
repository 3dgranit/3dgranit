import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@material-ui/core';
import { useStyles } from './styles/';
import img from './images/2.png'
import pinterest from './images/pinterest.png'

export const Footer = () => {
const classes = useStyles();

  return (
    <Box py={5} style={{ background: '#171717', color: 'white'}}>
      <Container maxWidth="lg">


          <Grid container justify="center" alignItems="center" spacing={3}>
  
            <Grid item xs={12} align="center">
              <Box pr={1} component={Link} href="https://www.instagram.com/3dgranit_com/" target="_black" className={classes.link} >
                <img src={img} alt="instagram" />
              </Box>
  
              <Link href="https://www.pinterest.com/3dgranit/_created/" target="_black" className={classes.link} >
                <img src={pinterest} alt="instagram" />
              </Link>
            </Grid>
          </Grid>
      </Container>
      
    </Box>
  )
}
