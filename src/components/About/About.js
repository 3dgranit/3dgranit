import React, { useEffect } from 'react';
import { Box, Container, Grid, Typography, Button } from '@material-ui/core';
import Photo from './images/img.jpg'
import { useStyles } from './styles/styles';
import Aos from 'aos';

export const About = () => {
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
    <Box py={10} id="about" className="section">
      <Container maxWidth="lg">
          <Grid container spacing={3}>
              <Box component={Grid}  item xs={12} md={6}>
                <Box width="100%" height="100%" overflow="hidden" className={classes.image} 
                 data-aos="fade-up" data-aos-duration="1000"
                >
                  <img src={Photo} alt="disagn" />
                </Box>
              </Box>
              <Grid item xs={12} md={6} className={classes.info}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h2" component="h2" align="center" className={classes.title} data-aos="fade-up" data-aos-duration="1500">3D-визуализатор</Typography>
                  </Grid>
                  <Grid item xs={12} align="center">
                    <Typography variant="body1" component="span" align="center" style={{ color: '#666'}}>работаю так, чтобы ваши клиента были довольны!</Typography>
                  </Grid>
                  <Grid item xs={12} align="center">
                    <Box component="div" style={{ width: 50, height: 3, background: '#666' }}></Box>
                  </Grid>
                  <Grid item xs={12} align="center">
                    <Typography variant="body1" component="span" align="center">Здравствуйте!) Рад познакомиться, меня зовут Артем.</Typography>
                  </Grid>
                  <Grid item xs={12} align="center">
                    <Typography variant="subtitle1" component="span" align="center">7 лет я занимаюсь 3D-моделингом, из которых 5 лет моделю памятники.
                      За это время я создал 3 уникальных каталога с более, чем 1000 моделей памятников, цоколей, оград, комплексов, столиков и лавочек каждый.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} align="center">
                    <Typography variant="body1" component="span" align="center">Десятки изготовителей памятников регулярно заказывают у меня индивидуальные эскизы комплексов.</Typography>
                  </Grid>
                  <Grid item xs={12} align="center">
                    <Typography variant="body1" component="span" align="center">Буду рад поработать и с вами, напишите мне прямо сейчас!</Typography>
                  </Grid>
                  <Box component={Grid} item xs={12} display="flex" justifyContent="center">
                    <Button data-scrollto="contact" variant="contained" color="primary" size="large" onClick={handleClick}>Написать мне</Button>
                  </Box>
                </Grid>
              </Grid>
          </Grid>
      </Container>
      
    </Box>
  )
}
