import React from "react";
import {maxLengthCreator, required} from "../Common/Forms/validators";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/Forms/FormsControls";

const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
    return (<div>
            <h1>LOGIN</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        required={true}
                        placeholder="email"
                        type="email"
                        name="email"
                        validate={[required, maxLength20]} component={Input}/>
                </div>
                <div>
                    <Field
                        required={true}
                        placeholder="Password"
                        name="password"
                        type="password"
                        validate={[required, maxLength20]} component={Input}/>
                </div>
                <div>
                    <Field
                        name="rememberMe"
                        type="checkbox"
                        component="input"/> rememberMe
                </div>
                <div>
                    {props.error && <div>
                        {props.error}
                    </div>}
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

export default LoginReduxForm;