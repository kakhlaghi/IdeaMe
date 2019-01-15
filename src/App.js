import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Idea ME </h1>
        </header>
        <Main />        
      </div>
    );
  }
}

export default App;
