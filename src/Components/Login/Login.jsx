import React from "react";
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    required="true"
                    placeholder="email"
                    type="email"
                    name="email"
                    component="input"/>
            </div>
            <div>
                <Field
                    required="true"
                    placeholder="Password"
                    name="password"
                    type="password"
                    component="input"/>
            </div>
            <div>
                <Field
                    name="rememberMe"
                    type="checkbox"
                    component="input"/> rememberMe
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;