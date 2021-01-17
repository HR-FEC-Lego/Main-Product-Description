CREATE DATABASE IF NOT EXISTS main_detail;

USE main_detail;

-- drop existing data if it is there.
DROP TABLE IF EXISTS itemData;
Drop TABLE IF EXISTS userData;

CREATE TABLE itemData (
  itemNum int NOT NULL AUTO_INCREMENT,
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
  PRIMARY KEY (itemNum)
);

CREATE TABLE userData (
  userNum int NOT NULL AUTO_INCREMENT,
  activeUser tinyint NOT NULL,
  wishListItems varchar(150),
  watchListItems varchar(150),
  PRIMARY KEY (userNum)
);
