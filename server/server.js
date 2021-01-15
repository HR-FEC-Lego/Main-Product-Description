const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index.js');

const app = express();
const port = 3000;

app.use(express.static(path.resolve('client', 'dist')));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/itemData', (req, res) => {
  db.getItemData(null, (err, data) => {
    if (err) {
      res.writeHead(400);
      res.end(JSON.stringify(err));
    } else {
      res.writeHead(200);
      res.end(JSON.stringify(data));
    }
  });
});

app.get('/api/userData', (req, res) => {
  db.getUserData(null, (err, data) => {
    if (err) {
      res.writeHead(400);
      res.end(JSON.stringify(err));
    } else {
      res.writeHead(200);
      res.end(JSON.stringify(data));
    }
  });
});

app.listen(port, () => {
  console.log(`Main Product Detail-Sever is listening at http://localhost:${port}`);
});
