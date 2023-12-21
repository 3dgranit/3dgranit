import { reducer as formReducer } from 'redux-form';
import { userReducer } from './userReducer'

const reducers = {
  form: formReducer,
  userReducer
};

export default reducers;