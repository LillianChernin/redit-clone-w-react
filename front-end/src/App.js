import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import MyRoutes from './config/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        { MyRoutes }
      </div>
    );
  }
}

export default App;
