const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index.js');
const { userDataHandler, itemDataHandler } = require('./dataHandlers.js');

const app = express();
const port = 3000;

app.use(express.static(path.resolve('client', 'dist')));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/itemData/:itemNum?', (req, res) => {
  db.getItemData(req.params.itemNum || req.query.itemNum, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      const newData = itemDataHandler(data);
      res.status(200).send(newData);
    }
  });
});

app.get('/api/userData/:userNum?', (req, res) => {
  db.getUserData(req.params.userNum || req.query.userNum, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      const newData = userDataHandler(data);
      res.status(200).send(newData);
    }
  });
});

app.get('/api/itemAndUser/:itemNum?/:userNum?', (req, res) => {
  let { itemNum, userNum } = req.query;
  if (!(req.query.itemNum)) {
    itemNum = req.params.itemNum;
    userNum = req.params.userNum;
  }
  db.getBoth({ itemNum, userNum }, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      const newData = {};
      [newData.itemData] = itemDataHandler(data.itemData);
      [newData.userData] = userDataHandler(data.userData);
      res.status(200).send(newData);
    }
  });
});

app.listen(port, () => {
  console.log(`Main Product Detail-Sever is listening at http://localhost:${port}`);
});
