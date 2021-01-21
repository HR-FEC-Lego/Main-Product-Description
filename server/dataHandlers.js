exports.userDataHandler = (data) => {
  const newData = [];
  for (let i = 0; i < data.length; i += 1) {
    newData[i] = { ...data[i] };
    newData[i].wishListItems = newData[i].wishListItems.split('/');
    newData[i].watchListItems = newData[i].watchListItems.split('/');
    newData[i].userCart = newData[i].userCart.split('/');
  }
  return newData;
};

exports.itemDataHandler = (data) => {
  const newData = [];
  for (let i = 0; i < data.length; i += 1) {
    newData[i] = { ...data[i] };
    newData[i].itemExclusiveTags = newData[i].itemExclusiveTags.split('/');
    newData[i].itemSeriesTags = newData[i].itemSeriesTags.split('/');
  }
  return newData;
};
