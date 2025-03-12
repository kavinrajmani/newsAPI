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

module.exports = app;
