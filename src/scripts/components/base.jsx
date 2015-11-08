/*

  VRealEstate React Base Component
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/

"use strict";

// Import React and Libraries
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

// Base Window Component
var VRealEstateBase = React.createClass({

  render: function() {
    return (
      <div className="vre-base-window">
        <RouteHandler />
      </div>
    );
  }

});

module.exports = VRealEstateBase;