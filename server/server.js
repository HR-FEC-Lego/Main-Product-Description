const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index.js');

const app = express();
const port = 3000;

app.use(express.static(path.resolve('client', 'dist')));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/itemData/:itemNum?', (req, res) => {
  db.getItemData(req.params.itemNum || req.query.itemNum, (err, data) => {
    if (err) {
      res.writeHead(400);
      res.end(JSON.stringify(err));
    } else {
      const newData = [];
      for (let i = 0; i < data.length; i += 1) {
        newData[i] = { ...data[i] };
      }
      res.writeHead(200);
      res.end(JSON.stringify(newData));
    }
  });
});

app.get('/api/userData/:userNum?', (req, res) => {
  db.getUserData(req.params.userNum || req.query.userNum, (err, data) => {
    if (err) {
      res.writeHead(400);
      res.end(JSON.stringify(err));
    } else {
      const newData = [];
      for (let i = 0; i < data.length; i += 1) {
        newData[i] = { ...data[i] };
        newData[i].wishListItems = newData[i].wishListItems.split('/');
        newData[i].watchListItems = newData[i].watchListItems.split('/');
      }
      res.writeHead(200);
      res.end(JSON.stringify(newData));
    }
  });
});

app.listen(port, () => {
  console.log(`Main Product Detail-Sever is listening at http://localhost:${port}`);
});
