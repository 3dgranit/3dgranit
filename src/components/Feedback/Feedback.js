import React, {useEffect} from 'react';
import {Box, Container, Typography, Grid, Button} from '@material-ui/core'
import {useStyles} from './styles/';
import TextField from '../../platform/reduxFormUnits/TextField/TextField';
import TextareaAutosize from '../../platform/reduxFormUnits/TextareaAutosize/TextareaAutosize';
import CheckBoxGroup from '../../platform/reduxFormUnits/CheckBox/CheckBoxGroup';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getFormValues, reduxForm} from 'redux-form'
import Aos from 'aos';
import ReCAPTCHA from "react-google-recaptcha";
import {init} from 'emailjs-com';

import {sendMessageController} from './controller/FeedBackController'

import iconWhatsapp from './images/whatsapp.png'
import iconViber from './images/viber.png'
import iconTelegram from './images/telegram.png'


const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Ошибка в email' : undefined

const required = value => value ? undefined : 'Обязательное поле'

const FORM_FEEDBACK = 'FORM_FEEDBACK'


const Feedback = ({values, sendMessage, handleSubmit}) => {
    const [captcha, setCaptcha] = React.useState(null);

    const classes = useStyles();

    const onSubmit = values => new Promise((resolve, reject) => {
        const messagesValues = values.messages ? values.messages.join(',') : '';
        resolve(sendMessage({
            to_email: values.email,
            to_phone: values.phone,
            to_comment: values.comments,
            to_messages: messagesValues
        }))
        setCaptcha(null)
    });

    useEffect(() => {
        Aos.init({duration: 2000});
        init("user_XN0fp9lgiozken78j8usB");
    })

    return (
        <Box py={10} id="contact" className="section">
            <Container maxWidth="lg">
                <Grid container alignItems="center">
                    <Box component={Grid} pb={5} item xs={12}><Typography variant="h3" component="h3" align="center"
                                                                          data-aos="fade-up" data-aos-duration="1500">Свяжитесь
                        со мной</Typography></Box>
                    <Box component={Grid} item xs={12} display="flex" justifyContent="center">
                        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField name="email" label="Email" fullWidth variant="outlined"
                                               validate={email}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField name="phone" label="Телефон" fullWidth variant="outlined"
                                               validate={required}/>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item><Typography variant="body2">В какой мессенджер вам
                                            написать?</Typography></Grid>
                                        <Grid item>
                                            <CheckBoxGroup
                                                name="messages"
                                                options={[{
                                                    label: 'WhatsApp',
                                                    value: 'WhatsApp',
                                                    icon: iconWhatsapp
                                                }, {
                                                    label: 'Viber',
                                                    value: 'Viber',
                                                    icon: iconViber
                                                }, {label: 'Telegram', value: 'Telegram', icon: iconTelegram}]}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextareaAutosize name="comments" placeholder="Комментарий ..."/>
                                </Grid>
                                <Grid item xs={12} align="center">

                                    {
                                        !captcha &&
                                        <ReCAPTCHA
                                            sitekey="6LdVmjgpAAAAABz1epi5wj1KJ9M06uD8OqscBDGT"
                                            onChange={value => setCaptcha(value)}
                                        />
                                    }

                                    <Button
                                        disabled={captcha === null}
                                        variant="contained" color="primary" type="submit">Отправить</Button>
                                </Grid>
                            </Grid>
                        </form>

                    </Box>
                </Grid>
            </Container>
        </Box>
    )
}

const enhance = compose(
    reduxForm({
        form: FORM_FEEDBACK,
    }),
    connect(state => {
        return {
            values: getFormValues(FORM_FEEDBACK)(state),
        }
    }, {
        sendMessage: sendMessageController
    })
)

export default enhance(Feedback)
