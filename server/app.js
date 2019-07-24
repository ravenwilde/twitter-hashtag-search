var express = require('express');
var bodyParser = require('body-parser');
var logger = require('express-logger');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var inspect = require('util-inspect');
var OAuth2 = require('OAuth').OAuth2;
var fetch = require('node-fetch');
var cors = require('cors')
const Bluebird = require('bluebird');

fetch.Promise = Bluebird;

var app = express();

app.use(cors())


var _twitterConsumerKey = "T5iG8R4TIWdXvkhv9IlbxPQia";
var _twitterConsumerSecret = "MK1FmZxKuVU68cekU4YGbQFkp6w1N3X3SsyKTbY5f4N0EUxHNj";


app.get('/get-token', function(req, res) {

  var oauth2 = new OAuth2(_twitterConsumerKey, _twitterConsumerSecret, 'https://api.twitter.com/', null, 'oauth2/token', null);
  oauth2.getOAuthAccessToken('', {
      'grant_type': 'client_credentials'
    }, function (e, access_token) {
        bearerToken = access_token;
        res.send({ access_token }); 
  });

});

app.get('/search/:hashtag/:count/:type', function(req, res) {
  var hashtag = '#' + req.params.hashtag;
  var count = req.params.count;
  var type = req.params.type;

  var oauth2 = new OAuth2(_twitterConsumerKey, _twitterConsumerSecret, 'https://api.twitter.com/', null, 'oauth2/token', null);  
  oauth2.getOAuthAccessToken('', {
      'grant_type': 'client_credentials'
    }, function (e, access_token) {      
      var options = {
          headers: {
              Authorization: `Bearer ${access_token}`
          }
      };
      fetch(`https://api.twitter.com/1.1/search/tweets.json?q=${encodeURIComponent(hashtag)}&count=${count}&result_type=${type}`, options)
        .then(res => res.json())
        .then(json => {
          console.log('Success - requested completed in ' + json.search_metadata.completed_in + 's');
          res.send({
            json
          })
        }); 
  });
 
})


app.get('*', function(req, res){
    res.redirect('/get-token');
});

app.listen(8080, function() {
  console.log('App running on port 8080!');
});