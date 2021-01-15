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

INSERT INTO itemData (itemNum, itemName, itemPrice, itemRating, itemReviewCount, itemInStock, itemStockLimitations, itemExclusiveTags, itemSeriesTags, seriesImagePath, itemAgeRatingBottom, itemAgeRatingTop, itemPieceCount, itemVipPoints, itemWarning, signUpIncentive) VALUES (10276, 'Colosseum', 549.99, 4.5, 44, 1, 2, 'New, Exclusives', 'Buildings, Creator Expert', './accessData/creator_logo_pos_300w.png', 18, null, 9036, 3575, null, 'Join VIP now and get a FREE Chariot with purchase of the exclusive new Collosseum.(*), ./accessData/BFCM-live-Promo-Badge-3.png');
INSERT INTO itemData (itemNum, itemName, itemPrice, itemRating, itemReviewCount, itemInStock, itemStockLimitations, itemExclusiveTags, itemSeriesTags, seriesImagePath, itemAgeRatingBottom, itemAgeRatingTop, itemPieceCount, itemVipPoints, itemWarning, signUpIncentive) VALUES (71374, 'Nintendo Entertainment System(TM)', 229.99, 4.4, 131, 0, 3, 'Exclusives', 'LEGO(R) Super Mario(TM)', './accessData/SuperMario-logo-pos_300w.png', 18, null, 2646, 1495, null, null);
INSERT INTO itemData (itemNum, itemName, itemPrice, itemRating, itemReviewCount, itemInStock, itemStockLimitations, itemExclusiveTags, itemSeriesTags, seriesImagePath, itemAgeRatingBottom, itemAgeRatingTop, itemPieceCount, itemVipPoints, itemWarning, signUpIncentive) VALUES (75301, "Luke Skywalker's X-Wing Fighter(TM)", 49.99, 4.8, 25, 1, 3, 'New', 'Star Wars(TM), Space', './accessData/star-wars-black--201606--gl--logo.png', 9, null, 474, 325, null, null);
INSERT INTO itemData (itemNum, itemName, itemPrice, itemRating, itemReviewCount, itemInStock, itemStockLimitations, itemExclusiveTags, itemSeriesTags, seriesImagePath, itemAgeRatingBottom, itemAgeRatingTop, itemPieceCount, itemVipPoints, itemWarning, signUpIncentive) VALUES (75292, 'The Razor Crest', 129.99, 4.3, 77, 0, null, null, null, './accessData/star-wars-black--201606--gl--logo.png', 10, null, 1023, 845, null, null);
INSERT INTO itemData (itemNum, itemName, itemPrice, itemRating, itemReviewCount, itemInStock, itemStockLimitations, itemExclusiveTags, itemSeriesTags, seriesImagePath, itemAgeRatingBottom, itemAgeRatingTop, itemPieceCount, itemVipPoints, itemWarning, signUpIncentive) VALUES (71043, 'Hogwarts(TM) Castle', 399.99, 5.0, 251, 1, 3, 'Hard to find', 'Fantasy, Buildings, Harry Potter(TM), Dragons', './accessData/HarryPotter--2018--gl--logo (1).png', 16, null, 6020, 2600, 'Warning! Chocking Hazard. Small Parts', null);
INSERT INTO userData (userNum, activeUser, wishListItems, watchListItems) VALUES (1, 0, null, null);
INSERT INTO userData (userNum, activeUser, wishListItems, watchListItems) VALUES (2, 1, '10276, 71374, 75301, 75292, 71043', '10276, 71374, 75301, 75292, 71043');
INSERT INTO userData (userNum, activeUser, wishListItems, watchListItems) VALUES (3, 1, null, null);
INSERT INTO userData (userNum, activeUser, wishListItems, watchListItems) VALUES (4, 1, null, '10276, 71374, 75301, 75292, 71043');
INSERT INTO userData (userNum, activeUser, wishListItems, watchListItems) VALUES (5, 1, '10276, 71374, 75301, 75292, 71043', null);

