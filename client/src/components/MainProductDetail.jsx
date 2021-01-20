/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Requests from '../Requests.jsx';
import { ExclusiveTags, SeriesImage } from './functionalComps.jsx';

class MainProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { itemNum, userNum } = this.props;
    // const { itemNum, userNum } = { itemNum: 0, userNum: 0 }; // use this line for random data.
    Requests.userDataGet(userNum, (userErr, data) => {
      if (userErr) {
        throw (userErr);
      } else {
        const userData = JSON.parse(data)[0];
        Requests.itemDataGet((itemNum), (err, itemDataOut) => {
          if (err) {
            throw (err);
          } else {
            const itemData = JSON.parse(itemDataOut)[0];
            this.setState({ itemData, userData });
          }
        });
      }
    });
  }

  render() {
    console.log(this.state);
    const { itemData, userData } = this.state;
    // eslint-disable-next-line react/destructuring-assignment
    if (!(itemData)) {
      return (
        <div className="MainProductDetail">Ain&apos;t no state up in here!</div>
      );
    }
    return (
      <div className="MainProductDetail">
        <ExclusiveTags arr={itemData.itemExclusiveTags} />
        <SeriesImage seriesName={itemData.itemSeriesTags[0]} imageLink={itemData.seriesImagePath} />
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
