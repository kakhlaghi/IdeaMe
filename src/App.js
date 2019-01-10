import React, { Component } from 'react';
import logo from './logo.svg';
import PostContainer from './containers/PostContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Idea ME </h1>
        </header>
        < PostContainer />
      </div>
    );
  }
}

export default App;
