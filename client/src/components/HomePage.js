import React from 'react';
import {callApiUpdate} from '../api/apiCall';

class HomePage extends React.Component {


  componentDidMount = () => {
    // UPDATE optimization table 
    callApiUpdate().then(response => {
        return  { response: response }; 
    });
  }


  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <p>Welcome to MYSQL NodeJS React Redux Application !</p>
        <div className="ui message">
          <p>You can read more about features in Features/Specs section.</p>
        </div>
        <p className="ui header">FrontEnd Design:</p>
        <p>React.JS + Redux with the following dependencies</p>
        <p>'react' JavaScript library for building user interfaces</p>
        <p>'react-select' JavaScript library</p>
        <p>'react-dom' This package serves as the entry point of the DOM-related rendering paths</p>
        <p>'redux' Predictable state container for JavaScript apps</p>
        <p>'redux-devtools-extension' Redux DevTools extension</p>
        <p>'react-redux' Official React bindings for Redux</p>
        <p>'react-router-dom' Routing for React</p>
        <p>'semantic-ui-react' Semantic-UI-React is the official React integration for Semantic UI </p>
        <p>'classnames' A simple javascript utility for conditionally joining classNames together</p>
      </div>
    );
  }
}

export default HomePage ;
