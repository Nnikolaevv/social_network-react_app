import React from "react";
import LoginReduxForm from "./LoginForm";
import {Redirect} from "react-router-dom";



const Login = (props) => {
    const onSubmit = ({email, password, rememberMe, captcha}) => {
        props.login(email, password, rememberMe, captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
       <div>
           <h1>Login page</h1>
           <div>
               <h2>For tests use: <br />
                   Email: free@samuraijs.com <br />
                   Password: free
               </h2>
           </div>
           <LoginReduxForm onSubmit={onSubmit} {...props}/>
       </div>
    )
}

export default Login