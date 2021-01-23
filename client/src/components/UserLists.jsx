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
        <WishListHeart fullHeart={1} />
        <span>Added to Wish List</span>
      </div>
    );
  } else {
    wishListComp = (
      <div className="addToWishList">
        <button type="button" onClick={(e) => listAdder(e, 'wishListItems')}>
          <WishListHeart fullHeart={false} />
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
          <EmailIcon />
          <span>Added to notifications list</span>
        </div>
      );
    } else {
      watchListComp = (
        <div className="addToWatchList">
          <button type="button" onClick={(e) => listAdder(e, 'watchListItems')}>
            <EmailIcon />
            <span>Notify when in stock</span>
          </button>
        </div>
      );
    }
  } else { watchListComp = ''; }

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

function WishListHeart(props) {
  const { fullHeart } = props;
  let heartfill = '';
  if (fullHeart) {
    heartfill = (
      <path d="M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7">
        p1
      </path>
    );
  }
  return (
    <svg width="100%" height="100%" viewBox="0 0 40 40" alt="" className="WishListHeart">
      <rect fill="#F8F8F8" width="40" height="40" rx="20">
        rect
      </rect>
      {heartfill}
      <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7">
        p2
      </path>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 40 40" alt="email" className="EmailIcon">
      <rect fill="#F8F8F8" width="40" height="40" rx="20">
        rect
      </rect>
      <path d="M 30.6122 11.4286 L 9.38776 11.4286 C 8.93691 11.4286 8.57143 11.8123 8.57143 12.2857 L 8.57143 27.7143 C 8.57143 28.1877 8.93691 28.5714 9.38776 28.5714 L 30.6122 28.5714 C 31.0631 28.5714 31.4286 28.1877 31.4286 27.7143 L 31.4286 12.2857 C 31.4286 11.8123 31.0631 11.4286 30.6122 11.4286 Z M 29.7959 13.1429 L 29.7959 13.58 L 20 21.4914 L 10.2041 13.58 L 10.2041 13.1429 L 29.7959 13.1429 Z M 10.2041 26.8571 L 10.2041 15.7143 L 14.898 19.5029 L 9.6 25.4257 C 9.29793 25.7784 9.32535 26.3214 9.66122 26.6386 C 9.9971 26.9557 10.5143 26.927 10.8163 26.5743 L 16.1959 20.5743 L 19.502 23.2486 C 19.7956 23.4858 20.2044 23.4858 20.498 23.2486 L 23.8041 20.5743 L 29.1837 26.5743 C 29.4857 26.927 30.0029 26.9557 30.3388 26.6386 C 30.6747 26.3214 30.7021 25.7784 30.4 25.4257 L 25.102 19.5286 L 29.7959 15.7143 L 29.7959 26.8571 L 10.2041 26.8571 Z" fill="#006DB7" fillRule="nonzero">
        path
      </path>
    </svg>
  );
}
