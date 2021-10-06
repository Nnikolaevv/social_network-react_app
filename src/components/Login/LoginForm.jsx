import React from "react";
import {Formik, Form} from "formik";
import * as Yup from 'yup';
import {CardActionArea, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import CheckboxForm from "../common/FormsUI/MaterialUIForms/Checkbox/CheckboxForm";
import TextFieldsForm from "../common/FormsUI/MaterialUIForms/TextField/TextFieldsForm";
import ButtonSubmit from "../common/FormsUI/MaterialUIForms/ButtonSubmit/ButtonSubmit";


const INITIAL_FORM_STATE = {
    email: 'nexon91@mail.ru',
    password: 'kolkaa31',
    rememberMe: false,
    captcha: '',
}

const FORM_VALIDATION = Yup.object().shape({
    email: Yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: Yup
        .string('Enter your password')
        .min(4, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const FORM_VALIDATION_WITH_CAPTCHA = Yup.object().shape({
    email: Yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: Yup
        .string('Enter your password')
        .min(4, 'Password should be of minimum 4 characters length')
        .required('Password is required'),
    captcha: Yup
        .string('Enter captcha')
        .min(4, 'Captcha should be of minimum 4 characters length')
        .required('Captcha is required'),
});



const LoginForm = (props) => {

    const onSubmit  = ({email, password, rememberMe, captcha}, {  setErrors }) => {
        props.login(email, password, rememberMe, captcha)
        //     .then(e => {
        //         props.error && setErrors({ password: props.error || 'Wrong pass'})
        //     }
        // )
    }


    return (
        <div>

            <Formik initialValues={{
                ...INITIAL_FORM_STATE
            }}
                    onSubmit={onSubmit}
                    validationSchema={!props.isCaptcha ? FORM_VALIDATION
                                                       : FORM_VALIDATION_WITH_CAPTCHA
                    }
            >
                <Form>
                    <Grid container spacing={2} justifyContent={"center"}>
                        <Grid item>
                            <Typography variant='h6'
                                        color='textSecondary'
                                        style={{color: 'green', textAlign: 'center'}}>
                                For test email and password at form!
                            </Typography>
                        </Grid>
                        <Grid item xs={10} md={10}>
                            <TextFieldsForm
                                name='email'
                                label='Email'
                            />
                        </Grid>
                        <Grid item xs={10} md={10}>
                            <TextFieldsForm
                                name='password'
                                label='Password'
                                type='password'
                            />
                        </Grid>
                        <Grid item xs={10} md={10}>
                            <CheckboxForm
                                name='rememberMe'
                                legend='Remember me'
                                label='Yes'
                            />
                        </Grid>
                        {props.isCaptcha &&
                        <React.Fragment>
                            <Grid item xs={10} md={10}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={props.urlCaptcha}
                                        title="Contemplative Reptile"
                                    />
                                </CardActionArea>
                            </Grid>
                            <Grid item xs={10} md={10}>
                                <TextFieldsForm
                                    name='captcha'
                                    label='Captcha'
                                />
                            </Grid>
                        </React.Fragment>
                        }
                        {props.error &&
                        <React.Fragment>
                            <Grid item xs={10} md={10}>
                                 <Typography variant='h6'
                                            color='primary'
                                             style={{color: 'red', textAlign: 'center'}}
                                            >
                                     {props.error}
                                 </Typography>
                            </Grid>
                        </React.Fragment>
                        }

                        <Grid item xs={10} md={8}>
                            <ButtonSubmit>
                                Login
                            </ButtonSubmit>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </div>

    )
}

export default LoginForm


