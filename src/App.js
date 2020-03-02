import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router,} from "react-router-dom";

import MainNavigation from './components/Navigation/MainNavigation';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
      <Router>
      <MainNavigation />
      </Router>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      </div>
    );
  }
}

export default App;
