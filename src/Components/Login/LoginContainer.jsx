import React from "react";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import LoginReduxForm from "./Login";
import {Redirect} from "react-router-dom";


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


const mapStateToProps=(state)=>{
    return {
        isAuth:state.auth.isAuth
    }
}

export default connect (mapStateToProps,{login})(Login);
