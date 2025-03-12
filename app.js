const express = require('express');
const app = express();

const logger = function (req, res, next) {
    console.log('logging')
    next()
  }
  
  app.use(logger)

app.get('/', (req, res) => {
  res.json({ message: 'Home page!' });
});

app.get('/api/sample/:name', (req, res) => {
  res.json({ message: `Hello, ${req.params.name}!` });
});

module.exports = app;
