import React, {useEffect} from "react";
import {Formik, Form, withFormik} from "formik";
import * as Yup from 'yup';
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import CheckboxForm from "../common/FormsUI/MaterialUIForms/Checkbox/CheckboxForm";
import TextFieldsForm from "../common/FormsUI/MaterialUIForms/TextField/TextFieldsForm";
import ButtonSubmit from "../common/FormsUI/MaterialUIForms/ButtonSubmit/ButtonSubmit";


const INITIAL_FORM_STATE = {
    email: 'lovawog867@bio123.net',
    password: '1122334455',
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
    // captcha: Yup
    //     .string
    //     .required('Enter captcha'),
});



const LoginForm = (props) => {

    const onSubmit  = ({email, password, rememberMe, captcha}, {  setErrors }) => {
        props.login(email, password, rememberMe, captcha)
            .then(e => {
                props.error && setErrors({ password: props.error || 'Wrong pass'})
            }
        )
    }

    // const validateCaptcha = (value) => {
    //     let error;
    //     if (!value) {
    //         error = 'Required Captcha';
    //     }
    //     return error;
    // }



    return (
        <div>

            <Formik initialValues={{
                ...INITIAL_FORM_STATE
            }}
                    onSubmit={onSubmit}
                    validationSchema={FORM_VALIDATION}

            >
                <Form>
                    <Grid container spacing={2} justifyContent={"center"}>
                        <Grid item>
                            <Typography variant='h5'
                                        color="textPrimary">
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

                        {props.isCaptcha && <React.Fragment>
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
                                    label='captcha'

                                />
                            </Grid>

                        </React.Fragment>
                        }
                        {/*{props.error &&*/}
                        {/*<div className={'formSummaryError'}>*/}
                        {/*    <span>{props.error}</span>*/}
                        {/*</div>*/}
                        {/*}*/}

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


