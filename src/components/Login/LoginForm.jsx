import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../helpers/validators/validators";


const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input}
                           name={'email'}
                           validate={[required]}
                           type="text"
                           placeholder={'Login'}
                    />
                </div>
                <div>
                    <Field component={Input}
                           name={'password'}
                           validate={[required]}
                           type="password"
                           placeholder={'Password'}/>
                </div>
                {props.errorMessages ? props.errorMessages.map(m => {
                    return (
                        <div>
                            <span>{m}</span>
                        </div>
                    )
                }) : null}
                <div>
                    <Field
                        component={Input}
                        name={'rememberMe'}
                        type="checkbox"
                        placeholder={'Remember me'}/>
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