import React, { useEffect, useState } from 'react';
import { useStyles } from './styles/styles';
import { Grid, Container, List, Hidden, Box } from '@material-ui/core';
import { Link, Element } from "react-scroll";
import * as Scroll from "react-scroll";

import logoImg from '../Header/images/logo.png'

const navLinks = [
  { url: 'work', label: 'Цены'},
  { url: 'advantages', label: 'Преимущества'},
  { url: 'reviews', label: 'Отзывы'},
  { url: 'about', label: 'Обо мне'},
  { url: 'contact', label: 'Контакты'},
]

export const HeaderMenu = () => {

  const [smallHeader, setSmallHeader] = useState(false);
  const [scrollProcent, setScrollProcent] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  let scrollSpy = Scroll.scrollSpy;
  const classes = useStyles();

  const handleClick = e => {
    handleOpenMenu();
  }

  const renderLi = () => (
    <>
      {
        navLinks.map(({url, label}, inx) => {
          return (
            <li key={url}>
              <Link activeClass="active" to={url}
              spy={true} smooth={true} offset={0}
              onClick={handleClick}
              >{label}</Link>
            </li>
          )
        })
      }
    </>
  )

  const handleScroll = e => {
    if (window.pageYOffset > 200) {
      setSmallHeader(true)
    } else {
      setSmallHeader(false)
    }

    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

    let sizeScrollProcent = (window.pageYOffset + document.documentElement.clientHeight) * 100 / scrollHeight;
    setScrollProcent(sizeScrollProcent > 30 ? sizeScrollProcent : 0)
  };

  const handleClickLogo = e => {
    e.preventDefault();
    document.getElementById('header').scrollIntoView({block: "center", behavior: "smooth"})
  }


  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    scrollSpy.update();
  });

  return (
    <Container maxWidth="xl" className={`${smallHeader ? classes.wrapperTopMenuActive : classes.wrapperTopMenu}`} >
      <Box component="div" className={classes.lineLoader} style={{ width: `${scrollProcent}%`}}></Box>
      <Container maxWidth="lg" className={classes.container}>
          <Grid container justify="space-between" alignItems="center" className={`${classes.menu} ${openMenu ? classes.menuOpen : classes.menuClose }`}>
            <Box component={Grid} item display="flex" alignItems='center'>
            <Hidden mdDown>
              <Box onClick={handleClickLogo}>
                <img src={logoImg} alt={'logo'} className={`${classes.logo} ${smallHeader ? classes.logoOpen : classes.logoClose }`}/>
              </Box>
            </Hidden>

              <Grid container>
                <Grid item>
                  <List className={classes.ul}>
                    { renderLi() }
                  </List>
                </Grid>
              </Grid>

            </Box>
            <Grid item>
              <a className={classes.linkPhone} href="tel:+375295219358">+375 29 521 9358</a>
            </Grid>
          </Grid>
        <Hidden mdUp>
          <Box onClick={handleClickLogo}>
            <img src={logoImg} alt={'logo'} className={classes.logoMobile}/>
          </Box>
          <button onClick={handleOpenMenu} className={`${classes.btnMenu} ${openMenu ? classes.btnMenuOpen : ''}`}>
            <div><span></span></div>
          </button>
        </Hidden>
      </Container>
    </Container>
  )
}
