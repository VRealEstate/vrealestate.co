/*

  VRealEstate React Routes
  ~~~~~~~~~~~~~~~~~~~~~~~~

*/

"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="landing" path="/" handler={require('./base.jsx')}>
    <DefaultRoute handler={require('./landing.jsx')} />
  </Route>
);

module.exports = routes;