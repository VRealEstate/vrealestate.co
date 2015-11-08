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
        <div id="vre_header">
          <div className="container">
            <div id="vre_header_logo"><a>VRealEstate</a></div>
            <nav id="vre_header_nav">
              <a href="/about">About</a>
              <a href="/faqs">FAQs</a>
              <a href="/contact">Contact</a>
              <a href="/request" className="btn btn--secondary">Request Invite</a>
            </nav>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = VRealEstateHeader;