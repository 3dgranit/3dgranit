import { makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(()=> ({
  slider: {
    '& ul button:before': {
      fontSize: 20
    },
    '& .slick-prev:before, & .slick-next:before': {
      color: '#292222'
    }
  },
  sliderElement: {
    padding: 20,
    background: 'white',
    margin: 20,
    transition: 'all .3s',
    '&:hover': {
      boxShadow: '0 0 10px rgba(0,0,0,0.5)'
    }
  },
  icon: {
    '& svg': {
      width: 33,
      height: 33
    }
  }
}))