const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get('/', (req, res) => {
  const indexHtml = fs.readFileSync('./index.html', 'utf-8');
  res.type('html').send(indexHtml);
});

app.get('/style.css', (req, res) => {
  const stylesCss = fs.readFileSync('./style.css', 'utf-8');
  res.type('css').send(stylesCss);
});

app.get('/script.js', (req, res) => {
  const scriptJs = fs.readFileSync('./script.js', 'utf-8');
  res.type('js').send(scriptJs);
});

// Handle other routes with a 404 error
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
