/*

  VRealEstate Header Component
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/

'use strict';


// Import React and Libraries
var React = require('react');
var Router = require('react-router');

// Header Component
var VRealEstateHeader = React.createClass({

  render: function() {
    return (
      <div>
        <div id="vre_footer">
          <div className="container">
            <small>&copy; Copyright 2015 VRealEstate, ZP & AV</small>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = VRealEstateHeader;