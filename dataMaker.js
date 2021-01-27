const faker = require('faker');
const db = require('./db/dbSetup.js');
const LegoData = require('./LEGOdata.js');

let itemCols = [];
let userCols = [];
const itemDataSet = [[...Object.values(LegoData.itemData)]];
const userDataSet = [[...Object.values(LegoData.userData)]];

const listGen = () => {
  const output = [];
  for (let i = 0; i < faker.random.number(5); i += 1) {
    output.push(faker.random.number({ min: 1000, max: 9999 }));
  }
  return output.join('/');
};

for (let i = 0; i < 100; i += 1) {
  const bottomAge = faker.random.number(18);
  const data = {
    itemNum: faker.random.number({ min: 1000, max: 9999 }),
    itemName: faker.lorem.words(3),
    itemPrice: faker.finance.amount(1, 999, 2),
    itemRating: faker.finance.amount(0, 5, 1),
    itemReviewCount: faker.random.number(9999),
    itemInStock: faker.random.number(1),
    itemBackOrder: faker.random.arrayElement([null, faker.random.number(120)]),
    itemStockLimitations: faker.random.number(9),
    itemExclusiveTags: faker.lorem.words(faker.random.number(3)).split(' ').join('/'),
    itemSeriesTags: faker.lorem.words(faker.random.number({ min: 1, max: 4 })).split(' ').join('/'),
    seriesName: faker.lorem.words(1),
    seriesImagePath: faker.image.imageUrl(),
    itemAgeRatingBottom: bottomAge,
    itemAgeRatingTop: faker.random.number({ min: bottomAge }),
    itemPieceCount: faker.random.number(9999),
    itemVipPoints: faker.random.number(9999),
    chokeWarning: faker.random.number(1),
    offersFlyer: faker.random.arrayElement(['', faker.lorem.sentences(faker.random.number(3), '')]),
    signUpOffer: faker.random.number(1),
    offersImageLink: faker.image.avatar(),
  };
  const userData = {
    userNum: faker.random.number({ min: 1000, max: 9999 }),
    activeUser: faker.random.number(1),
    wishListItems: listGen(),
    watchListItems: listGen(),
    userCart: listGen(),
  };
  itemDataSet.push([...Object.values(data)]);
  userDataSet.push([...Object.values(userData)]);
  if (i === 0) {
    itemCols = [...Object.keys(data)];
    userCols = [...Object.keys(userData)];
  }
}

db.setUpDB((setupErr, result) => {
  if (setupErr) {
    throw (setupErr);
  } else {
    db.addItemData(itemDataSet, itemCols, (itemErr, itemData) => {
      if (itemErr) {
        throw (itemErr);
      } else {
        db.addUserData(userDataSet, userCols, (userErr, userData) => {
          if (userErr) {
            throw (userErr);
          } else {
            console.log(result);
            console.log(itemData);
            console.log(userData);
            db.closeOut((err) => {
              if (err) { throw (err); }
            });
          }
        });
      }
    });
  }
});
