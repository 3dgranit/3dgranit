import React from 'react';
import { Box, Grid, Container, Typography, Button } from '@material-ui/core';

import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';

import image21 from './images/21.png';
import image22 from './images/22.png';
import image23 from './images/23.png';
import image24 from './images/24.png';
import image25 from './images/25.png';

import image31 from './images/31.png';
import image32 from './images/32.png';
import image33 from './images/33.png';
import image34 from './images/34.png';
import image35 from './images/35.png';

import { reduxForm } from "redux-form";
import { compose } from 'redux';
import { useStyles } from './styles';
import Slider from "react-slick";


const data = [
  {
    title: 'Простой комплекс',
    price: '14-20',
    oldPrice: '20-35',
    description: 'Простая геометрия. Не многочисленные элементы.',
    arrayImages: [image1, image2, image3]
  },
  {
    title: 'Средний комплекс',
    price: '20-35',
    oldPrice: '35-50',
    description: 'Не многочисленные элементы со сложной геометрией.',
    arrayImages: [image21, image22, image23, image24, image25]
  },
  {
    title: 'Сложный комплекс',
    price: 'от 35',
    oldPrice: 'от 50',
    description: 'Многочисленные элементы со сложной геометрией.',
    arrayImages: [image31, image32, image33, image34, image35]
  }
];

const settings = {
  dots: true,
  infinite: true,
  lazyLoad: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false
      }
    },
  ]
};



export const Work = ({ change }) => {
  const classes = useStyles();
  const handleClick = (e, title) => {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({block: "center", behavior: "smooth"})
    change('comments', `Интересует "${title}"`)
  }
  return (
    <Box py={10} style={{ background: '#f2f2f2'}} id="work" className="section">
      <Container maxWidth="lg">
        <Grid container spacing={3} justify="center">
          {
            data.map(({ title, price, description, arrayImages, oldPrice }) => {
              return (
                <Grid item key={title} xs={12} sm={6} md={4} style={{ display: 'flex' }}>
                    <Grid container direction="row" spacing={2} className={classes.itemWrap}>
                      <Grid item xs={12} align="center">
                        <Slider {...settings} className={classes.slider}>
                          
                          {
                            arrayImages.map(el => {
                              return (
                                <div key={el}>
                                  <img src={el} alt="review" style={{ maxWidth: '100%', padding: 10 }}/>
                                </div>
                              )
                            })
                          }
                          
                        </Slider>
                      </Grid>
                      <Grid item xs={12}>
                        <Box pt={3}>
                          <Typography variant="h6" component="h6" align="center">{title}</Typography>
                        </Box>
                        
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h4" component="h4" align="center">{price}$</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Box pt={1}>
                          <Grid container alignItems="center">
                            <Grid item xs={12} lg={6}><Typography variant="h6" component="h6" align="center">Сезонные скидки</Typography></Grid>
                            <Grid item xs={12} lg={6}>
                              <Grid container justify="space-around">
                                <Grid item className={classes.price}><Typography variant="h6" component="h6" align="center">{oldPrice}$</Typography></Grid>
                                <Grid item className={classes.sale} ><Typography variant="h6" component="h6" align="center">-30%</Typography></Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2" component="p" align="center">{description}</Typography>
                      </Grid>
                      <Grid item align="center" xs={12}>
                        <Button variant="contained" color="primary" size="large" onClick={(e) => handleClick(e, title)}>Заказать</Button>
                      </Grid>
                    </Grid>
                </Grid>
              )
            })
          }
         
        </Grid>
      </Container>
    </Box>
  )
}


const enhance = compose(
  reduxForm({form: 'FORM_FEEDBACK'}),
)

export default enhance(Work)