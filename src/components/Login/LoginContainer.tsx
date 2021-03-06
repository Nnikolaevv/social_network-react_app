import React, {FC} from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {login} from "../../redux/Reducers/auth-reducer";
import {AppStateType} from "../../redux/reduxStore";

type MapStateToPropsType = {
    isAuth: boolean
    isCaptcha: boolean
    errorMessage: string | null
    urlCaptcha: string | null
    error: string | null
}

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const LoginContainer: FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
    return (
        <Login isAuth={props.isAuth}
               isCaptcha={props.isCaptcha}
               urlCaptcha={props.urlCaptcha}
               error={props.error}
               login={props.login}
               errorMessage={props.errorMessage}
        />
    )
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        errorMessage: state.auth.errorMessage,
        isCaptcha: state.auth.isCaptcha,
        urlCaptcha: state.auth.urlCaptcha,
        error: state.auth.error
    }
}


export default compose(
    connect(mapStateToProps, {login})
)
(LoginContainer)

