import React, {FC} from "react";
import {Redirect} from "react-router-dom";
import LoginForm from "./LoginForm";
import {Card, CardContent, Container, makeStyles, Typography} from "@material-ui/core";
import {ClassNameMap} from "@mui/material";

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(5),
        position: 'sticky',
        top: 0,
        display:"flex",
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            height: '100vh',
            paddingTop: theme.spacing(0),
        },
    },
    card: {
        maxWidth: theme.spacing(60),
        paddingTop: theme.spacing(1),
        backgroundColor: theme.palette.primary.grey,
        [theme.breakpoints.down('xs')]: {
            height: '100vh',
        },
    },
    text: {
        textAlign: 'center',
        paddingBottom: theme.spacing(2),
    }
}))

type PropsType = {
    isAuth: boolean
    errorMessage: string | null
    isCaptcha: boolean
    urlCaptcha: string | null
    error: string | null
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}


const Login: FC<PropsType> = ({isAuth, errorMessage, isCaptcha, urlCaptcha, error, login}) => {
    const classes: ClassNameMap = useStyles()

    if (isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
       <div className={classes.container}>
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.text}
                            variant='h5'
                            color="textPrimary">
                    Sign in
                </Typography>
                    <LoginForm isAuth={isAuth}
                               errorMessage={errorMessage}
                               isCaptcha={isCaptcha}
                               urlCaptcha={urlCaptcha}
                               error={error}
                               login={login}
                               />
            </CardContent>
        </Card>
       </div>
    )
}

export default Login