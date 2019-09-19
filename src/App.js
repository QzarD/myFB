import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="inner">
          <div className="menu">
            <button className="c-hamburger c-hamburger-line">
              <span>Menu</span>
            </button>
          </div>
          <div className="logo">
            <img src="./../public/logo192.png" alt="logo192"/>
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
    </div>
  );
}

export default App;
