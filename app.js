const express = require('express');
const app = express();

// Add JSON middleware
app.use(express.json());

// Sample news data
let news = [
  { id: 1, title: 'First News', content: 'This is the first news article' },
  { id: 2, title: 'Second News', content: 'This is the second news article' },
  { id: 2, title: 'Third News', content: 'This is the third news article' }
];

const logger = function (req, res, next) {
  console.log(`Request path: ${req.path}`);
  next();
};

app.use(logger);

// Get all news
app.get('/api/news', (req, res) => {
  res.json(news);
});

// Get news by ID
app.get('/api/news/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const newsItem = news.find(n => n.id === id);
  
  if (!newsItem) {
    return res.status(404).json({ message: 'News not found' });
  }
  
  res.json(newsItem);
});

// Create a new news item
app.post('/api/news', (req, res) => {
  const newsItem = {
    id: news.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  
  news.push(newsItem);
  res.status(201).json(newsItem);
});

// Update news by ID
app.put('/api/news/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = news.findIndex(n => n.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'News not found' });
  }
  
  const updatedNews = {
    id: id,
    title: req.body.title || news[index].title,
    content: req.body.content || news[index].content
  };
  
  news[index] = updatedNews;
  res.json(updatedNews);
});

// Delete news by ID
app.delete('/api/news/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = news.findIndex(n => n.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'News not found' });
  }
  
  news.splice(index, 1);
  res.status(204).send();
});

module.exports = app;