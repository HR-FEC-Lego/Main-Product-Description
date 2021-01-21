import $ from 'jquery';

const Requests = {
  // userNum < 1000 returns a random entry
  userDataGet(userNum, callback) {
    $.get('/api/userData', { userNum }, (userData) => {
      callback(null, userData);
    });
  },

  itemDataGet(itemNum, callback) {
    // itemNum < 1000 returns a random entry
    $.get('/api/itemData', { itemNum }, (itemData) => {
      callback(null, itemData);
    });
  },

  getBoth(itemNum, userNum, callback) {
    const reqData = { itemNum, userNum };
    $.get('/api/itemAndUser', reqData, (res) => {
      callback(null, res);
    });
  },
};

export default Requests;
