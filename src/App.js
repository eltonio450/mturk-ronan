import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './pages/First';
import Second from './pages/Second';
import { Route } from 'react-router-dom';
import Third from './pages/Third';
import Fourth from './pages/Fourth';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={First} />
        <Route exact path="/instruction_1" component={Second} />
        <Route exact path="/instruction_2" component={Third} />
        <Route exact path="/instruction_3" component={Fourth} />
      </Fragment>

    );
  }
}

export default App;
