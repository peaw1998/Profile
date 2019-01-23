import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'reactstrap';
import Header from './components/Header';

import NavBar from "./components/NavBar"
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
