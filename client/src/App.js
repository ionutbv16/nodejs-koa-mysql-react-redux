import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

import EventsPage from './components/EventsPage';
import EventsIOPage from './components/EventsIOPage';
import EventsCAPage from './components/EventsCAPage';
import EventsADPage from './components/EventsADPage';
import EventsOPPage from './components/EventsOPPage';

import './App.css';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui six item menu">
          <ActiveLink activeOnlyWhenExact to="/" label="Home" />
          <ActiveLink activeOnlyWhenExact to="/events" label="Events" />
          <ActiveLink activeOnlyWhenExact to="/eventsio" label="Events by IO" />
          <ActiveLink activeOnlyWhenExact to="/eventsca" label="Events by CA" />
          <ActiveLink activeOnlyWhenExact to="/eventsad" label="Events by AD" />
          <ActiveLink activeOnlyWhenExact to="/eventsop" label="Events by OP" />
        </div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/events" component={EventsPage} />
        <Route path="/eventsio" component={EventsIOPage} />
        <Route path="/eventsca" component={EventsCAPage} />
        <Route path="/eventsad" component={EventsADPage} />
        <Route path="/eventsop" component={EventsOPPage} />
      
         
        
      </div>
    );
  }
}

export default App;
