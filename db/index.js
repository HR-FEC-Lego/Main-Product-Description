const mysql = require('mysql');
const { connectionData, dbName } = require('./mysql.config.js');

const connection = mysql.createConnection({ ...connectionData, database: dbName });

connection.connect((err) => {
  if (err) {
    console.log(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected as id: ${connection.threadId}`);
});

// query to get all item data -- used for dev
exports.getItemData = (itemNum, callback) => {
  let random = false;
  let pick;
  let itemStr = itemNum ? `WHERE itemNum = ${itemNum}` : '';
  const queryStr = 'SELECT * FROM itemData';
  if (itemNum < 1000) {
    itemStr = '';
    random = true;
  }
  connection.query(`${queryStr} ${itemStr}`, (err, data) => {
    if (err) {
      callback(err);
    } else {
      if (random === true) {
        pick = Math.floor(Math.random() * data.length);
        callback(null, [data[pick]]);
        return null;
      }
      callback(null, data);
    }
    return data;
  });
};

exports.getUserData = (userNum, callback) => {
  let random = false;
  let pick;
  let userStr = userNum ? `WHERE userNum = ${userNum}` : '';
  const queryStr = 'SELECT * FROM userData';
  if (userNum < 1000) {
    userStr = '';
    random = true;
  }
  connection.query(`${queryStr} ${userStr}`, (err, data) => {
    if (err) {
      callback(err);
    } else {
      if (random === true) {
        pick = Math.floor(Math.random() * data.length);
        callback(null, [data[pick]]);
        return null;
      }
      callback(null, data);
    }
    return data;
  });
};

exports.getBoth = (data, callback) => {
  const { itemNum, userNum } = data;
  this.getItemData(itemNum, (itemErr, itemData) => {
    if (itemErr) {
      callback(itemErr);
    } else {
      this.getUserData(userNum, (userErr, userData) => {
        if (userErr) {
          callback(userErr);
        } else {
          callback(null, { itemData, userData });
        }
      });
    }
  });
};

exports.closeOut = (callback) => {
  connection.end((err) => {
    if (err) {
      callback(err);
    } else { callback(null); }
  });
};
