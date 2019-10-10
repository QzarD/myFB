import React from "react";
import Header from "./Header";
import {getAuthUserData, login, logout} from "../../Redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return(
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps,{getAuthUserData,login,logout})(HeaderContainer);