import { makeStyles } from '@material-ui/core/styles';
import img from '../images/me.png'

export const useStyles = makeStyles(theme => ({
  info: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    [theme.breakpoints.up('sm')]: {
      fontSize: 70,
    },
  },
  image: {
    boxShadow: '0 0 10px rgb(0 0 0 / 50%)',
    '& img': {
      width: '100%',
      height: '100%',
      transition: 'all .5s',
      '&:hover': {
        transition: 'all .5s',
        boxShadow: '0 0 10px rgb(0 0 0 / 50%)',
        transform: 'scale(1.2) rotate(-3deg)',
      }
    }
    
  }
}));