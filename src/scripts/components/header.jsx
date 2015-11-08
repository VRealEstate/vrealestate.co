/*

  VRealEstate Header Component
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/

'use strict';


// Import React and Libraries
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

// Header Component
var VRealEstateHeader = React.createClass({

  render: function() {
    return (
      <div>
        <div id="vre_header">
          <div className="container">
            <div id="vre_header_logo">
              <Link to="landing">VRealEstate</Link>
            </div>
            <nav id="vre_header_nav">
              <Link to="landing">About</Link>
              <Link to="landing">FAQs</Link>
              <Link to="landing">Contact</Link>
              <Link to="landing" className="btn btn--secondary">Request Invite</Link>
            </nav>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = VRealEstateHeader;