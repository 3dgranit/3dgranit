
import { send } from 'emailjs-com';
import {reset} from 'redux-form';

  const templateId = 'template_3qijxco';
  const serviceID = 'service_wici1rl';
  const userID = 'user_XN0fp9lgiozken78j8usB'

export const sendMessageController = (values) => async dispatch => {
  dispatch({ type: 'SHOW_LOADING' })
  try {
    const res = await send(serviceID, templateId, values,  userID)
    dispatch({ type: 'SHOW_POPUP', payload: { text: 'Заявка успешно отправлена!', icon: 'success'} })
    dispatch(reset('FORM_FEEDBACK'));
    setTimeout(() => dispatch({ type: 'HIDE_POPUP' }), 1500)
    dispatch({ type: 'HIDE_LOADING' })
  } catch(err) {
    console.log(err)
  }
}