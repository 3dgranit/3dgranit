const initState = {
  popup: {
    isPopup: false,
    text: null,
    icon: null
  },
  loading: false
}

export const userReducer = (state = initState, action) => {
  switch(action.type) {
    case 'SHOW_LOADING': {
      return {
        ...state,
        loading: true
      }
    }
    case 'HIDE_LOADING': {
      return {
        ...state,
        loading: false
      }
    }
    case 'SHOW_POPUP': {
      return {
        ...state,
        popup: {
          isPopup: true,
          text: action.payload.text,
          icon: action.payload.icon,
        }
      }
    }
    case 'HIDE_POPUP': {
      return {
        ...state,
        popup: {
          isPopup: false,
          text: null,
          icon: null
        }
      }
    }
    default: {
      return state
    }
  }
}