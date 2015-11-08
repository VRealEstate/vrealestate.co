/*

  VRealEstate Express Server
  ~~~~~~~~~~~~~~~~~~~~~~~~~~

*/

// Import Express and Libraries
var express = require('express');

// Initialize Express App
var vrealestate = express();

// Serve Our Base Template
vrealestate.get('/', function(req, res) {
  res.sendFile('./dist/views/base.html', {'root': __dirname});
});

// Serve Our Static Assets
vrealestate.use('/dist', express.static(__dirname + '/dist'));

// Start Express Server
var server = vrealestate.listen(3000, function() {
  var port = server.address().port;
  console.log('VRealEstate listening on port ' + port);
})