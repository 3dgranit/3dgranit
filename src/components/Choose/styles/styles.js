import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  wrapperBox: {
    
    '& span:before': {
      content: '\'\'',
      width: 6,
      height: 6,
      background: 'black',
      display:' inline-block',
      borderRadius: '50%',
      marginRight: 10
    },
    '& img': {
      transition: 'all .3s',
    },
    '& h6': {
      transition: 'all .5s',
    },
    '&:hover ': {
      '& h6': {
        color: '#adad04'
      }

    }
    
  }
}))