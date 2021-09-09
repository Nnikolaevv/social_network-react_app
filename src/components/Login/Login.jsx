import React from "react";
import LoginReduxForm from "./LoginForm";
import {Redirect} from "react-router-dom";



const Login = (props) => {
    const onSubmit = ({email, password, rememberMe}) => {
        props.login(email, password, rememberMe)
    }


    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
       <div>
           <h1>login</h1>
           <LoginReduxForm onSubmit={onSubmit} {...props}/>
       </div>
    )
}

export default Login