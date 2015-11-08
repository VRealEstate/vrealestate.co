/*

  VRealEstate React Base Component
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/

"use strict";

// Import React and Libraries
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

// Import Shared Components
var Header = require('./header.jsx');

// Base Window Component
var VRealEstateBase = React.createClass({

  render: function() {
    return (
      <div className="vre-base-window">
        <Header />
        <RouteHandler />
      </div>
    );
  }

});

module.exports = VRealEstateBase;