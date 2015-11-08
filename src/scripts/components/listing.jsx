/*

  VRealEstate Listing Component
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/

'use strict';

// Import React and Libraries
var React = require('react');
var Router = require('react-router');

// Landing Page Component
var VRealEstateListing = React.createClass({

  getInitialState: function() {
    return {
      listing: {
        image: 'example-listing-1.jpg',
        address: '1337 Hacker Way, Torvalds, CA 94103',
        bed: '3',
        bath: '1',
        sqft: '1300'
      }
    }
  },

  componentDidMount: function() {

  },

  render: function() {
    return (
      <div id="vre_listing">
        <div className="container">
          <div id="vre_listing_header">
            <h1>{this.state.listing.address}</h1>
          </div>
          <div id="vre_listing_viewer">
          
          </div>
        </div>
      </div>
    );
  }

});

module.exports = VRealEstateListing;