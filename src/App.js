import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <div className="container">
          <Content />
        </div>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
