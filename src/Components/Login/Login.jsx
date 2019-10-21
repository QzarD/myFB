import React from "react";
import {maxLengthCreator, required} from "../Common/Forms/validators";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/Forms/FormsControls";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

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
                    <div>
                        {props.captchaUrl && <img src={props.captchaUrl} alt="captcha"/>}
                    </div>
                    <div>
                        {props.captchaUrl && <Field required={true} name="captcha" component={Input}/>}
                    </div>

                </div>
                <div>
                    {props.error &&
                        <div>
                            {props.error}
                        </div>
                    }
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login);