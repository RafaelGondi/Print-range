import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TittleScreen from './TittleScreen';
import Forms from './Forms';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
        <div>
          <Menu/>
          <TittleScreen tittle={'PrinterNmbrs'}/>
          <Forms/>
        </div>
    );
  }
}

export default App;
