import React from 'react';

function listChecker(list, itemNum) {
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === itemNum.toString()) {
      return true;
    }
  }
  return false;
}

function UserLists(props) {
  let wishListComp;
  let watchListComp;
  const {
    itemNum,
    inStock,
    backOrder,
    wishList,
    watchList,
    listUpdate,
  } = props;

  function listAdder(event, list) {
    event.preventDefault();
    listUpdate(list);
  }

  // handle our wishlist case.
  if (listChecker(wishList, itemNum)) {
    wishListComp = (
      <div className="addedToWishList">
        <div>FullHeart</div>
        <span>Added to Wish List</span>
      </div>
    );
  } else {
    wishListComp = (
      <div className="addToWishList">
        <button type="button" onClick={(e) => listAdder(e, 'wishListItems')}>
          <div>OpenHeart</div>
          <span>Add to Wish List</span>
        </button>
      </div>
    );
  }

  // handle our watchList case
  if (inStock) {
    watchListComp = '';
  } else if (backOrder) {
    if (listChecker(watchList, itemNum)) {
      watchListComp = (
        <div className="addedToWatchList">
          <div>Mail Image</div>
          <span>Added to notifications list</span>
        </div>
      );
    } else {
      watchListComp = (
        <div className="addToWatchList">
          <button type="button" onClick={(e) => listAdder(e, 'watchListItems')}>
            <div>Mail Image</div>
            <span>Notify when in stock</span>
          </button>
        </div>
      );
    }
  }

  return (
    <div className="UserListContainer">
      <div className="WishList">
        {wishListComp}
      </div>
      <div className="WatchList">
        {watchListComp}
      </div>
    </div>
  );
}

export default UserLists;
