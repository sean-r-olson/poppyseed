import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from '../Home/Home';
import Work from '../Work/Work';
import Events from '../Events/Events';
import About from '../About/About';
import Contact from '../Contact/Contact';
import HamNav from '../HamNav/HamNav';
import NavBar from '../Navbar/Navbar';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <>
      <HamNav />
      <Router>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/home"
              component={Home}
            />
            <Route
              exact
              path="/work"
              component={Work}
              />
             <Route
              exact
              path="/events"
              component={Events}
            />
             <Route
              exact
              path="/about"
              component={About}
            />
              <Route
              exact
              path="/contact"
              component={Contact}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
      </Router>
      </>
    );
  }
}

export default App;
