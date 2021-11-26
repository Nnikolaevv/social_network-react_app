import React, {FC} from "react";
import {Formik, Form} from "formik";
import * as Yup from 'yup';
import {CardActionArea, CardMedia, Grid, Typography} from "@material-ui/core";
import CheckboxForm from "../common/FormsUI/MaterialUIForms/Checkbox/CheckboxForm";
import TextFieldsForm from "../common/FormsUI/MaterialUIForms/TextField/TextFieldsForm";
import ButtonSubmit from "../common/FormsUI/MaterialUIForms/ButtonSubmit/ButtonSubmit";

type FormikType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const INITIAL_FORM_STATE: FormikType = {
    email: 'nexon91@mail.ru',
    password: 'kolkaa31',
    rememberMe: false,
    captcha: '',
}

const FORM_VALIDATION = Yup.object().shape({
    email: Yup
        .string()
        .email('Enter a valid email')
        .required('Enter your email'),
    password: Yup
        .string()
        .min(4, 'Password should be of minimum 8 characters length')
        .required('Enter your password'),
});

const FORM_VALIDATION_WITH_CAPTCHA = Yup.object().shape({
    email: Yup
        .string()
        .email('Enter a valid email')
        .required('Enter your email'),
    password: Yup
        .string()
        .min(4, 'Password should be of minimum 4 characters length')
        .required('Enter your password'),
    captcha: Yup
        .string()
        .min(4, 'Captcha should be of minimum 4 characters length')
        .required('Enter captcha'),
});

type PropsType = {
    isAuth: boolean
    errorMessage: string | null
    isCaptcha: boolean
    urlCaptcha: string | null
    error: string | null
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}


const LoginForm: FC<PropsType> = ({isAuth, errorMessage, isCaptcha, urlCaptcha, error, login}) => {

    const onSubmit = ({email, password, rememberMe, captcha}: FormikType, {setErrors}: any) => {
        login(email, password, rememberMe, captcha)
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
                    validationSchema={!isCaptcha ? FORM_VALIDATION
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
                        {isCaptcha &&
                        <>
                            <Grid item xs={10} md={10}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={urlCaptcha}
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
                        </>
                        }
                        {error &&
                        <Grid item xs={10} md={10}>
                            <Typography variant='h6'
                                        color='primary'
                                        style={{color: 'red', textAlign: 'center'}}
                            >
                                {error}
                            </Typography>
                        </Grid>
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


