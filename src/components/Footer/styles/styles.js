import { makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(()=> ({
  link: {
    '& img': {
      transition: 'all .3s',
      width: 40,
      background: 'white',
      borderRadius: 10,
      '&:hover': {
        boxShadow: '0 0 10px rgb(255 255 255 / 50%)'
      }
    }
  }
}))