import React from 'react';

class UserLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemInWishList: false,
      itemInWatchList: false,
    };
  }

  render() {
    const {
      itemNum,
      inStock,
      backOrder,
      wishList,
      watchList,
      listUpdate,
    } = this.props;

    return (
      <div className="UserListContainer">
        User Lists Will Go Here.
      </div>
    );
  }
}

function listChecker(list, itemNum) {

}

export default UserLists;
