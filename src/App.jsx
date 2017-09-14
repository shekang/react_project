import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Test(props) {
  return <h1>Hello, {props.name}</h1>;
}
class App extends Component {
  render() {
    return (
      
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React</h2>

        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      // <div>
      //   <Test name="test1"/>
      //   <Test name="test"/>
      // </div>
    ); 
  }
}

export default App;
