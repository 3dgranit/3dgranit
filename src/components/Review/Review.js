import React, { useEffect } from 'react';
import { Box, Container, Grid, Typography, Link } from '@material-ui/core';
import { useStyles } from './styles';
import Slider from "react-slick";
import Aos from 'aos';
import IconButton from '@material-ui/core/IconButton';

import LanguageIcon from '@material-ui/icons/Language';
import InstagramIcon from '@material-ui/icons/Instagram';

import screen1 from './images/rew1.jpg';
import screen2 from './images/rew2.jpg';
import screen3 from './images/rew3.jpg';
import screen4 from './images/rew4.jpg';
import screen5 from './images/rew5.jpg';
import screen6 from './images/rew6.jpg';
import screen7 from './images/rew7.jpg';
import screen8 from './images/rew8.jpg';


const settings = {
  dots: true,
  infinite: true,
  lazyLoad: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
};

const configData = [
  { img: screen1, 
    siteUrl: 'https://xn----7sbqkalmeegm2bf7l0ai.xn--p1ai/', instagramUrl: ' https://www.instagram.com/dkamnia/'
  },
  { img: screen2, 
    siteUrl: 'http://xn----7sbb2bjdt0a4g2a.xn--p1ai/', instagramUrl: 'https://www.instagram.com/pamyatniki30/'
  },
  { img: screen3, 
    siteUrl: 'https://pamyatm.ru/', instagramUrl: 'https://www.instagram.com/pamyatm.ru/?r=nametag'
  },
  { img: screen4, 
    siteUrl: 'https://talkingstone.ru/', 
    // instagramUrl: 'instagram.com'
  },
  { img: screen5, 
    siteUrl: 'http://ritualbel.by/', instagramUrl: 'https://www.instagram.com/ritual_belarus/'
  },
  { img: screen6, 
    // siteUrl: 'google.com', 
    instagramUrl: 'https://www.instagram.com/nikolskaya_masterskaya/'
  },
  { img: screen7, 
    siteUrl: 'https://memorial-grad.ru/', instagramUrl: 'https://www.instagram.com/anna_d3940/'
  },
  { img: screen8, 
    siteUrl: 'https://www.nsrpnn.ru/', instagramUrl: 'https://www.instagram.com/zaran.ko/'
  }
]

export const Review = () => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  })

  return (
    <Box py={10} style={{ background: '#f2f2f2'}} id="reviews" className="section">
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Box pb={5} component={Grid} item xs={12} align="center">
            <Typography variant="h3" component="h3" className={classes.title} data-aos="fade-up" data-aos-duration="1500">Что говорят клиенты о работе со мной</Typography>
          </Box>
          <Grid item xs={12}>
            <Slider {...settings} className={classes.slider}>
              {
                configData.map(({ id, img, siteUrl = null, instagramUrl = null }) => {
                  return (
                    <div key={img}>
                      <div  style={{outline: 'none'}}>
                        <Box component="img" src={img} alt="review" style={{ maxWidth: '100%', padding: 10, outline: 'none' }}/>
                      </div>
                      <Box textAlign="center">
                        {
                          siteUrl && (
                            <Link href={siteUrl} target="_blank">
                              <IconButton aria-label="site" className={classes.icon}>
                                <LanguageIcon />
                              </IconButton>
                            </Link>
                          )
                        }
                        {
                          instagramUrl && (
                            <Link href={instagramUrl} target="_blank">
                              <IconButton aria-label="instagram" className={classes.icon}>
                                <InstagramIcon />
                              </IconButton>
                            </Link>
                          )
                        }
                      </Box>
                    </div>
                  )
                })
              }
            </Slider>
          </Grid>
        </Grid>
      </Container>
      
    </Box>
  )
}
