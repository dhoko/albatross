// set variables for environment
var express = require('express');
var app = express();
var path = require('path');
var Faker = require('Faker');
var Feeds = require('sponge-test-api');

// Set server port
app.listen(4000);
console.log('server is running on :4000');

/*

    Feeds

 */

// Return all the subscribed feeds for the current user
app.get('/feeds', function(request, response) {
  response.send(Feeds.all);
});

// Return a specific feed resource
app.get('/feeds/:id', function(request, response) {
  response.send(Feeds.all[request.params.id] || []);
});

//Create a feed and subscribe to it.
app.post('/feeds', function(request, response) {
  response.status(503)
  response.send({status : 'Cannot create the feed'})
})
//Delete a feed and subscribe to it.
app.delete('/feeds', function(request, response) {
  response.status(503)
  response.send({status : 'Cannot create the feed'})
})

/*

    Articles

 */

// Return all the subscribed feeds for the current user
app.get('/articles', function(request, response) {
  response.send(Feeds.articles);
});

// Return a specific feed resource
app.get('/feeds/:id/articles', function(request, response) {
  response.send(Feeds.all[request.params.id].articles || []);
});

app.get('/' , function(request, response) {

  var _unread = []
  Feeds.all.forEach(function (item, index) {
    _unread = _unread.concat(item.articles)
  })

  response.send(_unread);
});
