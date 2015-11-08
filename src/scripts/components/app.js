/*
  
  VRealEstate React Application
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/

"use strict";

// Import React
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');

// Import Route Configuration
var routes = require('./routes.jsx');

// Respond to The Route Handlers
Router.run(routes, function(Handler) {
  ReactDOM.render(React.createElement(Handler, null), document.getElementById('vrealestate'));
});