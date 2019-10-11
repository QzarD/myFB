import React, {Component} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import {getInitialized} from "./Redux/app-selectors";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) { return <Preloader/>}
        return (
            <div className="app">
                <header className="app-header">
                    <HeaderContainer/>
                </header>
                <div className="navbar">
                    <Navbar/>
                </div>
                <div className="content">
                    <Content/>
                </div>
                <footer className="footer">
                    <Footer/>
                </footer>
            </div>

        );
    }
}

const mapStateToProps=(state)=>({
    initialized: getInitialized(state),
})
export default compose(
    withRouter,
    connect(mapStateToProps,{initializeApp})
)(App);