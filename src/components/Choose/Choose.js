import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid } from '@material-ui/core';
import { useStyles } from './styles'
import Aos from 'aos';

import icon3 from './images/nadezhnost.png';
import icon2 from './images/opyt.png';
import icon from './images/tsena.png';
import icon4 from './images/unikalnost.png';

export const Choose = () => {
  const classes = useStyles()

  useEffect(() => {
    Aos.init({ duration: 2000 });
  })

  return (
    <Box py={10} style={{ background: '#f2f2f2'}}  id="advantages" className="section">
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12} align="center">
            <Typography variant="h3" component="h3" data-aos="fade-up" data-aos-duration="1500">Почему стоит выбрать меня?</Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Typography variant="h6" component="h6" data-aos="fade-up" data-aos-duration="2500">Работаю так, чтобы ваши клиенты были довольны!</Typography>
          </Grid>
        </Grid>
        <Box pt={10}>
          <Grid container spacing={0} >
            <Box component={Grid} pb={4} item xs={12} sm={6} align="center" className={classes.wrapperBox}>
              <Grid container spacing={3} direction="column" alignItems="center">
                <Grid item>
                  <Box
                    component={'img'}
                    height={90}
                    width={90}
                    display="block"
                    mx="auto"
                    src={icon2}
                  />
                </Grid>
                <Grid item><Typography variant="h6" component="h6"><b>ОПЫТ</b></Typography></Grid>
                <Grid item style={{ textAlign: 'left', maxWidth: 300 }}>
                  <Grid container direction="column">
                    <Grid item><span><b>7 лет</b> 3D-моделинга</span></Grid>
                    <Grid item><span>более <b>3000</b> моделей</span></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box component={Grid} pb={4}  item xs={12} sm={6} align="center" className={classes.wrapperBox}>
              <Grid container spacing={3} direction="column" alignItems="center">
                <Grid item>
                  <Box
                    component={'img'}
                    height={90}
                    width={90}
                    display="block"
                    mx="auto"
                    src={icon}
                  />
                </Grid>
                <Grid item><Typography variant="h6" component="h6"><b>ЦЕНА</b></Typography></Grid>
                <Grid item style={{ textAlign: 'left', maxWidth: 300 }}>
                  <Grid container direction="column">
                    <Grid item><span>от <b>14$</b> за комплекс</span></Grid>
                    <Grid item><span><b>оплата после</b> получения макета</span></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box component={Grid} pb={4}  item xs={12} sm={6} align="center" className={classes.wrapperBox}>
              <Grid container spacing={3} direction="column" alignItems="center">
                <Grid item>
                  <Box
                    component={'img'}
                    height={90}
                    width={90}
                    display="block"
                    mx="auto"
                    src={icon3}
                  />
                </Grid>
                <Grid item><Typography variant="h6" component="h6"><b>НАДЕЖНОСТЬ</b></Typography></Grid>
                <Grid item style={{ textAlign: 'left', maxWidth: 300 }}>
                  <Grid container direction="column">
                    <Grid item><span>предварительная оценка проекта</span></Grid>
                    <Grid item><span>выполнение всех правок</span></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box component={Grid} pb={4}  item xs={12} sm={6} align="center" className={classes.wrapperBox}>
              <Grid container spacing={3} direction="column" alignItems="center">
                <Grid item>
                  <Box
                    component={'img'}
                    height={90}
                    width={90}
                    display="block"
                    mx="auto"
                    src={icon4}
                  />
                </Grid>
                <Grid item><Typography variant="h6" component="h6"><b>УНИКАЛЬНОСТЬ</b></Typography></Grid>
                <Grid item style={{ textAlign: 'center', maxWidth: 300 }}>
                  <Grid container direction="column">
                    <Grid item>каждый заказчик получает уникальный макет и все права на его использование</Grid>

                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Box>

      </Container>
    </Box>
  )
}
