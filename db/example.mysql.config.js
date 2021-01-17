exports.connectionData = {
  host: 'localhost',
  user: 'FILL_ME_IN!!!!!',
  password: 'FILL_ME_IN!!!!',
};

exports.dbName = 'main_detail';

exports.tableNames = {
  itemData: 'itemData',
  userData: 'userData',
};

exports.itemDataSchema = `itemNum int NOT NULL AUTO_INCREMENT,
itemName varChar(50) NOT NULL,
itemPrice decimal (6, 2) NOT NULL,
itemRating decimal (2, 1) NOT NULL,
itemReviewCount int NOT NULL,
itemInStock tinyint NOT NULL,
itemBackOrder tinyint NOT NULL,
itemStockLimitations int,
itemExclusiveTags varchar(150),
itemSeriesTags varchar(150),
seriesImagePath varchar(350),
itemAgeRatingBottom int,
itemAgeRatingTop int,
itemPieceCount int NOT NULL,
itemVipPoints int NOT NULL,
itemWarning varchar(200),
signUpIncentive varchar(400),
signUpImage varchar(400),
PRIMARY KEY (itemNum)`;

exports.userDataSchema = `userNum int NOT NULL AUTO_INCREMENT,
activeUser tinyint NOT NULL,
wishListItems varchar(150),
watchListItems varchar(150),
PRIMARY KEY (userNum)`;
