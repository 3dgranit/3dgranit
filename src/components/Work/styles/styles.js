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
  price: {
    '&:before': {
      content: '\'\'',
      width: '100%',
      height: 1,
      background: 'red',
      display: 'flex',
      position: 'relative',
      top: 17,
      transform: 'rotate(10deg)'
    },
    '&:after': {
      content: '\'\'',
      width: '100%',
      height: 1,
      background: 'red',
      display: 'flex',
      position: 'relative',
      top: -17,
      transform: 'rotate(-10deg)'
    }
  },
  sale: {
    color: 'red',
    fontWeight: 'bold'
  },
  itemWrap: {
    border: '1px solid #eeeeee',
    background: 'white', 
    padding: 20,
    transition: 'all .5s',
    '&:hover': {
      boxShadow: '0 0 10px rgba(0,0,0,0.5)'
    }
  }
}))