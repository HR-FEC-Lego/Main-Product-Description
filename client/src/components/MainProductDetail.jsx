/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Requests from './Requests.jsx';

class MainProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    // set itemNum and userNum to 0 for random entries.
    const { itemNum, userNum } = this.props;
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
            console.log(userData);
            console.log(itemData);
            this.setState({ itemData, userData });
          }
        });
      }
    });
  }

  render() {
    return (
      <div className="MainProductDetail">
        <div>React App Running!</div>
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
