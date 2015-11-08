/*

  VRealEstate Landing Component
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/

"use strict";

// Import React and Libraries
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

// Landing Page Component
var VRealEstateLanding = React.createClass({

  getInitialState: function() {
    return {
      example_listings: [
        {
          image: 'example-listing-1.jpg',
          address: '1337 Hacker Way, Torvalds, CA 94103',
          bed: '3',
          bath: '1',
          sqft: '1300'
        },
        {
          image: 'example-listing-2.jpg',
          address: '667 Child Stars Ave, Albert, IA 18058',
          bed: '3',
          bath: '1',
          sqft: '1300'
        },
        {
          image: 'example-listing-3.jpg',
          address: '534 Buttercup Way, Bob Hope, PA 12071',
          bed: '3',
          bath: '1',
          sqft: '1300'
        }
      ]
    }
  },

  render: function() {
    return (
      <div>
        <div id="vre_masthead">
          <h1>Open House, Anytime</h1>
          <h3>Easily Showcase Listings With Virtual 3D Walkthroughs</h3>
          <a href="https://gdkxmahvyg.localtunnel.me/?listing=13122258">
            <button className="btn--large">Try the Viewer</button>
          </a>
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
        <div id="vre_example_listings" className="container">
          <h3>Take a look at a few example listings:</h3>
          {this.state.example_listings.map(function(listing, i) {
            return (
              <div className="vre-example-listing-wrapper" key={i}>
                <Link to="listing">
                  <div className="vre-example-listing-content">
                    <div className="vre-example-listing-image">
                      <img src={'../../dist/images/' + listing.image}/>
                    </div>
                    <div className="vre-example-listing-details">
                      <h5>{listing.address}</h5>
                      <small>{listing.bed} bed, {listing.bath} bath, {listing.sqft} sqft.</small>
                    </div>
                  </div>
                </Link>
              </div>
            );
          }, this)}
        </div>
      </div>
    )
  }

});

module.exports = VRealEstateLanding;