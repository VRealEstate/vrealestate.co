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
var Footer = require('./footer.jsx');

// Base Window Component
var VRealEstateBase = React.createClass({

  render: function() {
    return (
      <div className="vre-base-window">
        <Header />
        <RouteHandler />
        <Footer />
      </div>
    );
  }

});

module.exports = VRealEstateBase;