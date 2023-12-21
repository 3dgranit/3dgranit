
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  modal: {
    display: 'none',
    position: 'fixed',
    background: 'rgba(0,0,0,.8)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 1s',
    '&.action': {
      transition: 'all 1s',
      display: 'flex',
      '& > div': {
        transition: 'all 1s',
        transform:'translateY(0%)',
      }
    }
  },
  content: {
    transform:'translateY(-1000%)',
    transition: 'all 1s',
    maxWidth: 400,
    height: 300,
    background: 'white',
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    textAlign: 'center'
  }
}))