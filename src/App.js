import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="inner max-width">
          <div className="menu">
            <button className="c-hamburger c-hamburger-line">
              <span>Menu</span>
            </button>
          </div>
          <div className="logo">
            <img src="./img/logo192.png" alt="logo192"/>
          </div>
          <div className="nameSite">
            <span>YouListing</span>
          </div>
          <div className="search">
            <input type="text"/>
          </div>
          <div className="button">
            <button>+ Add Listing</button>
          </div>
          <div className="icoHome">

          </div>
          <div className="icoMessage"></div>
          <div className="icoBell"></div>
          <div className="signIn"></div>
        </div>
      </header>
      <div className="navbar">
        <div className="navbar-inner">
          <div className="navbar-section">
            <div className="navbar-row"><a href="#">Home</a></div>
            <div className="navbar-row"><a href="#">Listing</a></div>
            <div className="navbar-row"><a href="#">Find Profiles</a></div>
            <div className="navbar-row"><a href="#">Messages</a></div>
          </div>
          <div className="navbar-section">
            <div className="navbar-row"><a href="#">Saved</a></div>
            <div className="navbar-row"><a href="#">Most Viewed</a></div>
            <div className="navbar-row"><a href="#">Liked</a></div>
            <div className="navbar-row"><a href="#">Payment</a></div>
          </div>
          <div className="navbar-section">
            <div className="navbar-row"><a href="#">Help</a></div>
            <div className="navbar-row"><a href="#">Setting</a></div>
            <div className="navbar-row"><a href="#">Send Feedback</a></div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content-inner max-width">
          <div className="home">
            This Home page
          </div>
          <div className="Message">
            This Message page
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
