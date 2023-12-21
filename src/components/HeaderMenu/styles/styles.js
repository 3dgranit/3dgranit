import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  btnMenu: {
    height: 40,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'all .3s',
    '&:hover': {
      '& div span': {
        transition: 'all .3s',
        background: '#f0f07d',
      },
      '& div:after': {
        transition: 'all .3s',
        background: '#f0f07d',
      },
      '& div:before': {
        transition: 'all .3s',
        background: '#f0f07d',
        
      }
    },
    '& div span': {
      width: 40,
      height: 3,
      background: 'white',
      display: 'block'
    },
    '& div': {
      '&:after': {
        content: '\'\'',
        width: 40,
        height: 3,
        background: 'white',
        position: 'relative',
        top: 10,
        display: 'block'
      },
      '&:before': {
        content: '\'\'',
        width: 40,
        height: 3,
        background: 'white',
        position: 'relative',
        top: -10,
        display: 'block'
      }
    }
  },
  btnMenuOpen: {
    '& div': {
      '& span': {
        transform: 'scale(0)'
      },
      '&:after': {
        transform: 'rotate(45deg)',
        background: '#f0f07d',
        top: -4
      },
      '&:before': {
        transform: 'rotate(-45deg)',
        background: '#f0f07d',
        top: 2
      }

    }
  },
  menuOpen: {
    display: 'flex'
  },
  menuClose: {
    display: 'none'
  },
  menu: {
    
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      position: 'absolute',
      bottom: -300,
      left: 0,
      right: 0,
      flexDirection: 'column',
      background: '#434242',
      height: 300,
      padding: 15,
      '& ul': {
        flexDirection: 'column',
        textAlign: 'center',
        '& li': {
          marginBottom: 20,
          
        }
      }
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  wrapperTopMenuActive: {
    position: 'fixed',
    top: 0,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    zIndex: 15,
    background: 'black',
    transition: 'all .3s',
    [theme.breakpoints.between('xs', 'sm')]: {
      background: 'black',
    },
  },
  wrapperTopMenu: {
    position: 'fixed',
    top: 0,
    height: 70,
    display: 'flex',
    alignItems: 'center',
    zIndex: 15,
    background: 'transparent',
    transition: 'all .3s',
    [theme.breakpoints.between('xs', 'sm')]: {
      background: 'black',
    },
  },
  ul: {
    display: 'flex',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 500,
    '& li': {
      textTransform: 'uppercase',
      '& a': {
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'Roboto, Arial, sans-serif',
        position: 'relative',
        transition: 'all .3s',
        '&:after': {
          content: '\'\'',
          transition: 'all .3s',
          transform: 'scale(0)'
        },
        '&:hover': {
          color: '#f0f07d',
          cursor: 'pointer',
          transition: 'all .3s',
          '&:after': {
            content: '\'\'',
            transition: 'all .3s',
            width: '100%',
            transform: 'scale(1)',
            height: 2,
            background: '#f0f07d',
            position: 'absolute',
            left: 0,
            bottom: -2
            
          }
    
        }
      },
      '& a.active': {
        color: '#f0f07d',
        '&:after': {
          content: '\'\'',
          transition: 'all 1s',
          width: '100%',
          transform: 'scale(1)',
          height: 2,
          background: '#f0f07d',
          position: 'absolute',
          left: 0,
          bottom: -2
          
        }
      }
    },
    '& li:not(:last-child)': {
      paddingRight: 15,
      [theme.breakpoints.between('xs', 'sm')]: {
        paddingRight: 0
      }
    }
  },
  linkPhone: {
    fontSize: 18,
    color: '#f0f07d',
    textDecoration: 'none',
    fontFamily: 'Roboto, Arial, sans-serif'
  },
  lineLoader: {
    height: 2,
    position: 'absolute',
    background: '#f0f07d',
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    transition: 'all .3s',
    width: 215,
    marginRight: 40,
    paddingTop: 10,
    borderRadius: '0px 0px 10px 10px',
    position: 'relative',
    zIndex: 10,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  logoOpen: {
    boxShadow:' 0 0 10px rgb(0 0 0 / 50%)',
    background: 'white'
  },
  logoClose: {
  },
  logoMobile: {
    transition: 'all .3s',
    width: 215,
    marginRight: 40,
    paddingTop: 10,
    borderRadius: '0px 0px 10px 10px',
    position: 'relative',
    zIndex: 10,
    boxShadow:' 0 0 10px rgb(0 0 0 / 50%)',
    background: 'white',
    '&:hover': {
      cursor: 'pointer'
    }

  }
}));