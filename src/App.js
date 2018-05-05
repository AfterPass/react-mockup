import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to AfterPass</h1>
        </header>
        <label className="name">Full name (Optional): </label><input className="name"/>
        <p className="App-warning">
          Remember! You cannot change your keychain data after you encode it!
        </p>
        <label className="data">Key Data to Encode: </label><br/><textarea className="key-data" rows="8" cols="60"></textarea>
        <p className="App-warning">
          The more people you share your key with, the more secure your keychain.
        </p>
        <label className="data">My trustees: </label><br/>
        <select size="4" multiple className="trustees">
          <option value="AfterPass">AfterPass (open@afterpass.co)</option>
          <option>Me (user@example.com) </option>
          <option>Dav (dave@example.com)</option>
          <option>Lana (lana@example.com)</option>
        </select><br/>
        <label className="name">Add another: </label><input className="name"/>
        <p className="App-warning">
          You are responsible for distributing your keys. Download them by pressing the button below.
        </p>
        <button className="download">Download</button>
      </div>
    );
  }
}

export default App;
