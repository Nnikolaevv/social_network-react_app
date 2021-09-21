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
                <div>
                    <Field
                        component={Input}
                        name={'rememberMe'}
                        type="checkbox"
                        checked={true}/>
                    <span>Remember me</span>
                </div>
                {props.isCaptcha &&
                <div>
                    <div>
                        <img src={props.urlCaptcha} alt=""/>
                        <Field component={Input}
                               name={'captcha'}
                               validate={[required]}
                               type="text"
                               placeholder={'captcha'}/>
                    </div>
                </div>}
                {props.error &&
                <div className={'formSummaryError'}>
                    <span>{props.error}</span>
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm