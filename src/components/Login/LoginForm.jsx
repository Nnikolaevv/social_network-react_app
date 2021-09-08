import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
      <div>
          <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'Login'} name={'email'} component={'input'}/>
            </div>
              <div>
                  <Field type="password" placeholder={'Password'} name={'password'} component={'input'}/>
              </div>
              <div>
                  <Field type="checkbox" placeholder={'Remember me'} name={'rememberMe'} component={'input'}/>
                  <span>Remember me</span>
              </div>
              <div>
                  <button>Login</button>
              </div>
          </form>
      </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm