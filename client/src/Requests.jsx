import $ from 'jquery';

const Requests = {
  // userNum < 1000 returns a random entry
  userDataGet(userNum, callback) {
    $.get('/api/productDescription/userData', { userNum }, (userData) => {
      callback(null, userData);
    });
  },

  itemDataGet(itemNum, callback) {
    // itemNum < 1000 returns a random entry
    $.get('/api/productDescription/itemData', { itemNum }, (itemData) => {
      callback(null, itemData);
    });
  },

  getBoth(itemNum, userNum, callback) {
    const reqData = { itemNum, userNum };
    $.get('/api/productDescription/itemAndUser', reqData, (res) => {
      callback(null, res);
    });
  },
};

export default Requests;
