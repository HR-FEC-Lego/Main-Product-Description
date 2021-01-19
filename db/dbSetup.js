const mysql = require('mysql');
const db = require('./mysql.config.js');

const connection = mysql.createConnection({ ...db.connectionData, multipleStatements: true });

connection.connect((err) => {
  if (err) {
    console.log(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected as id: ${connection.threadId}`);
});

exports.setUpDB = (callback) => {
  // Create database if not exist
  // USE database
  // DROP all tables if they exist
  // CREATE itemData table
  // CREATE userData table

  const createDB = `CREATE DATABASE IF NOT EXISTS ${db.dbName}`;
  const useDB = `USE ${db.dbName}`;
  const drop = 'DROP TABLE IF EXISTS';
  const create = 'CREATE TABLE';

  const d1 = `${drop} ${db.tableNames.itemData}`;
  const d2 = `${drop} ${db.tableNames.userData}`;
  const table1 = `${create} ${db.tableNames.itemData} (${db.itemDataSchema})`;
  const table2 = `${create} ${db.tableNames.userData} (${db.userDataSchema})`;
  const qStr = `${createDB}; ${useDB}; ${d1}; ${d2}; ${table1}; ${table2};`;
  connection.query(qStr, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
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

exports.addUserData = (userData, userCols, callback) => {
  const queryStr = 'INSERT INTO userData (??) VALUES ? ON DUPLICATE KEY UPDATE userNum=userNum+1';
  connection.query(queryStr, [userCols, userData], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

exports.addItemData = (itemData, itemCols, callback) => {
  const queryStr = 'INSERT INTO itemData (??) VALUES ? ON DUPLICATE KEY UPDATE itemNum=itemNum+1';
  connection.query(queryStr, [itemCols, itemData], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};
