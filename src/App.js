import React, { Component } from 'react';
import logo from './logo.svg';
import PostContainer from './containers/PostContainer'
import './App.css';
import update from 'immutability-helper'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Idea ME </h1>
        </header>
        < PostContainer />
      </div>
      </Router>
    );
  }
}

export default App;
