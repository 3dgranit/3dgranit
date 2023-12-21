import React, { useEffect } from 'react';
import { useStyles } from './styles/styles.js';
import { Container, Grid, Button , Box, Link  } from '@material-ui/core';
import Aos from 'aos';

export const Header = () => {
  const classes = useStyles();

  const handleClick = e => {
    e.preventDefault();
    const btn = e.target.closest('button');
    if (btn) {
      document.getElementById(btn.getAttribute('data-scrollto')).scrollIntoView({block: "center", behavior: "smooth"})
    }  

  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
  })

  return (
    <Container maxWidth="xl"  className={`${classes.bg} section`} style={{display: 'flex'}} id="header">
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Box component="h1" pb={2}>Мемориальное 3D-моделирование</Box>
        </Grid>
        <Grid item>
          <Grid container spacing={2} justify="center">
            <Grid item><Button data-scrollto="contact" variant="contained" color="primary" size="large" onClick={handleClick}>Отправить ТЗ</Button></Grid>
            <Grid item><Button data-scrollto="work" variant="outlined" color="primary" size="large" onClick={handleClick}>Смотреть примеры работ</Button></Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </Container>
  )
}