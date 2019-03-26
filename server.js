// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
var apps = module.exports = express();
app.user(bodyParser.json());
app.use(cors());



// listen for requests :)
app.listen(3000, function(){
  console.log('working');
});