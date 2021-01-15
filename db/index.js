const mysql = require('mysql');
const connectionData = require('./mysql.config.js');

const connection = mysql.createConnection(connectionData);

connection.connect((err) => {
  if (err) {
    console.log(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected as id: ${connection.threadId}`);
});

// query to get all item data -- used for dev
function getItemData(itemNum, callback) {
  const itemStr = itemNum ? `WHERE 'itemNum' = '${itemNum}'` : '';
  const queryStr = 'SELECT * FROM itemData';
  connection.query(`${queryStr} ${itemStr}`, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

function getUserData(userNum, callback) {
  const userStr = userNum ? `WHERE userNum = ${userNum}` : '';
  const queryStr = 'SELECT * FROM userData';
  connection.query(`${queryStr} ${userStr}`, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

module.exports.getItemData = getItemData;
module.exports.getUserData = getUserData;
