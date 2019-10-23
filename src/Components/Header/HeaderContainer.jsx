import React from "react";
import Header from "./Header";
import {logout} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {getIsAuth, getLogin} from "../../Redux/auth-selectors";

class HeaderContainer extends React.Component{
    render() {
        return(
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps=(state)=>({
    isAuth: getIsAuth(state),
    login: getLogin(state),
})
export default connect(mapStateToProps,{logout})(HeaderContainer);