import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

function App(props) {

    return (

        <div className="app">
          <header className="app-header">
            <Header/>
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

export default App;
