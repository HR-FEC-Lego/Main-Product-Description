/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Requests from '../Requests.jsx';
import funcComps from './functionalComps.jsx';
import ReviewRating from './ReviewRating.jsx';
import AddToCart from './AddToCart.jsx';
import UserLists from './UserLists.jsx';
import SeriesLinks from './SeriesLinks.jsx';

class MainProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purchaseQuant: 0,
    };
    this.addToCart = this.addToCart.bind(this);
    this.listUpdate = this.listUpdate.bind(this);
  }

  componentDidMount() {
    const { itemNum, userNum } = this.props;
    Requests.getBoth(itemNum, userNum, (err, res) => {
      if (err) {
        throw (err);
      } else {
        this.setState(res);
      }
    });
  }

  addToCart(quantity) {
    // eslint-disable-next-line no-alert
    alert(`${quantity} added to cart`);
    this.setState({ purchaseQuant: quantity });
  }

  listUpdate(list) {
    const {
      itemData: { itemNum },
      userData: { userNum },
    } = this.state;
    const {
      userData: {
        [list]: listItems,
        ...otherUserData
      },
    } = this.state;
    listItems.push(itemNum.toString());
    this.setState({ userData: { [list]: listItems, ...otherUserData } });
    // console.log(itemNum);
    // console.log(userNum);
    // Reqests.listAdd(itemNum, userNum);
  }

  render() {
    const { itemData, userData } = this.state;
    // eslint-disable-next-line react/destructuring-assignment
    if (!(itemData)) {
      return (
        <div className="MainProductDetail">Ain&apos;t no state up in here!</div>
      );
    }
    return (
      <div className="MainProductDetail">
        <funcComps.ExclusiveTags arr={itemData.itemExclusiveTags} />
        <funcComps.SeriesImage
          seriesName={itemData.itemSeriesTags[0]}
          imageLink={itemData.seriesImagePath}
        />
        <funcComps.ItemName itemName={itemData.itemName} />
        <ReviewRating rating={itemData.itemRating} reviewCount={itemData.itemReviewCount} />
        <funcComps.ItemPrice itemPrice={itemData.itemPrice} />
        <AddToCart
          inStock={itemData.itemInStock}
          backOrder={itemData.itemBackOrder}
          quantLimit={itemData.itemStockLimitations}
          addToCart={this.addToCart}
        />
        <UserLists
          itemNum={itemData.itemNum}
          inStock={itemData.itemInStock}
          backOrder={itemData.itemBackOrder}
          wishList={userData.wishListItems}
          watchList={userData.watchListItems}
          listUpdate={this.listUpdate}
        />
        <div>Check Store Stock - Stretch Goal</div>
        <SeriesLinks seriesTags={itemData.itemSeriesTags} />
        <div>{JSON.stringify(this.state)}</div>
      </div>
    );
  }
}

MainProductDetail.propTypes = {
  itemNum: PropTypes.number.isRequired,
  userNum: PropTypes.number.isRequired,
};

export default MainProductDetail;
