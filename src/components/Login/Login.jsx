import React from "react";
import LoginReduxForm from "./LoginForm";


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.sendLoginData(formData)
    }

    return (
       <div>
           <h1>login</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
       </div>

    )
}

export default Login