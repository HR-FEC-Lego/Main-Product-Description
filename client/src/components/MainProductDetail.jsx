/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Requests from '../Requests.jsx';
import funcComps from './functionalComps.jsx';
import ReviewRating from './ReviewRating.jsx';
import AddToCart from './AddToCart.jsx';

class MainProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { itemNum, userNum } = this.props;
    // const { itemNum, userNum } = { itemNum: 0, userNum: 0 }; // use this line for random data.
    Requests.getBoth(itemNum, userNum, (err, res) => {
      if (err) {
        throw (err);
      } else {
        console.log('client response');
        console.log(res);
        this.setState(res);
      }
    });
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
        <AddToCart inStock={itemData.itemInStock} backOrder={itemData.itemBackOrder} />
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
