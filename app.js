const express = require('express');
const app = express();

const logger = function (req, res, next) {
    console.log('logging')
    next()
  }
  
  app.use(logger)

app.get('/api/sample', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.get('/api/sample/:name', (req, res) => {
  res.json({ message: `Hello, ${req.params.name}!` });
});

module.exports = app;
