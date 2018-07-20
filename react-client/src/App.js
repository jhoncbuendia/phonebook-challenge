import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import ContactView from './components/ContactView';
import TopBar from './components/TopBar';

import $ from 'jquery'; 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopBar/>
          <Route exact path="/" component={ContactView}/>
        </div>

        
      </Router>
    );
  }
}

export default App;
