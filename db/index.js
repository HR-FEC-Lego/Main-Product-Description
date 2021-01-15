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
  console.log(`${queryStr} ${itemStr}`);
  connection.query(`${queryStr} ${itemStr}`, (err, data) => {
    if (err) {
      console.log('err in db');
      console.log(err);
      callback(err);
    } else {
      console.log('success in db');
      console.log(data);
      callback(null, data);
    }
  });
};

module.exports.getItemData = getItemData;
