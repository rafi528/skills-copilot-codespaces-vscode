// Create web server
const express = require('express');
const app = express();
app.use(express.json());
// Create comments array
const comments = [];
// Create a variable to store the next ID for the comment
let nextId = 1;
// Create a POST route to add comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comment.id = nextId;
  nextId++;
  comments.push(comment);
  res.status(201).send(comment);
});
// Create a GET route to read comments
app.get('/comments', (req, res) => {
  res.status(200).send(comments);
});
// Create a GET route to read comments by ID
app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((element) => element.id === id);
  if (comment) {
    res.status(200).send(comment);
  } else {
    res.status(404).send();
  }
});
// Create a PUT route to update comments by ID
app.put('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((element) => element.id === id);
  if (comment) {
    comment.body = req.body.body;
    res.status(200).send(comment);
  } else {
    res.status(404).send();
  }
});
// Create a DELETE route to delete comments by ID
app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = comments.findIndex((element) => element.id === id);
  if (index !== -1) {
    comments.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});
// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// End of web server
// End of comments.js