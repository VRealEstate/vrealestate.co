/*

  VRealEstate Landing Component
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/

"use strict";

// Import React and Libraries
var React = require('react');
var Router = require('react-router');

// Landing Page Component
var VRealEstateLanding = React.createClass({

  render: function() {
    return (
      <div>
        <div id="vre_masthead">
          <h1>Open House, Anytime</h1>
          <h3>Easily Showcase Listings With Virtual 3D Walkthroughs</h3>
          <button className="btn--large">Try the Viewer</button>
        </div>
        <div id="vre_videodrop"></div>
        <div id="vre_process" className="container">
          <div className="vre-process-item">
            <span>1</span>
            <h4>Take Photos With Any Camera</h4>
            <p>No special equipment required. Show off your property with the photographs you are already taking, then upload to your favourite service.</p>
          </div>
          <div className="vre-process-item">
            <span>2</span>
            <h4>Create a VRealEstate Listing</h4>
            <p>An address and your image links are all we need to build an immersive virtual reality experience of your property.</p>
          </div>
          <div className="vre-process-item">
            <span>3</span>
            <h4>Share or Embed Your 3D Walkthrough</h4>
            <p>Provide clients with a link to your VRealEstate viewer; hosted with us or your own website. Delight them with unprecedented access.</p>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = VRealEstateLanding;