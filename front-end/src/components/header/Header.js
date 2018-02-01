import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">reddit</h1>
        <h2 className="App-blurb">The front page of the web</h2>
      </header>
    )
  }
}

export default Header;
