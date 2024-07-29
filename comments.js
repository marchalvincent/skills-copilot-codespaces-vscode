// Create web server using express
var express = require('express');
var app = express();

// Import comments.js
var comments = require('./comments.js');

// Create a GET request to get all comments
app.get('/comments', function(req, res) {
  res.json(comments.getComments());
});

// Create a POST request to add a comment
app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.addComment(comment);
  res.json(comment);
});

// Create a GET request to get a comment by id
app.get('/comments/:id', function(req, res) {
  var comment = comments.getComment(req.params.id);
  res.json(comment);
});

// Create a PUT request to update a comment by id
app.put('/comments/:id', function(req, res) {
  var comment = req.body;
  comments.updateComment(req.params.id, comment);
  res.json(comment);
});

// Create a DELETE request to delete a comment by id
app.delete('/comments/:id', function(req, res) {
  comments.deleteComment(req.params.id);
  res.json(null);
});

// Start the server
app.listen(3000);
console.log('Listening on port 3000...');