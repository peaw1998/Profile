import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'reactstrap';
import Header from './components/Header';

import NavBar from "./components/NavBar"

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Header/>
      </div>
    );
  }
}

export default App;
