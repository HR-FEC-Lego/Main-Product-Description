/* eslint-disable react/no-array-index-key */
import React from 'react';

export function ExclusiveTags(props) {
  const { arr } = props;
  const tagItems = arr.map((tag, index) => (
    <div className="ExclusiveTag" id={tag} key={index}>
      {tag}
    </div>
  ));
  return (
    <div>{ tagItems }</div>
  );
}

export function SeriesImage(props) {
  let { seriesName, imageLink } = props;

  function handleClick(e) {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert(`Series Image Clicked rerouting to: ${seriesName} page`);
  }
  if (imageLink) {
    return (
      <input type="image" src={imageLink} alt="series Image" onClick={handleClick} className="SeriesImage" />
    );
  }
  return (<div> </div>);
}

export function ItemName(props) {
  const { itemName } = props;
  if (itemName) {
    return (
      <div className="ItemName"><h2>{itemName}</h2></div>
    );
  }
  return (<div> </div>);
}

export function ItemPrice(props) {
  const { itemPrice } = props;
  if (itemPrice) {
    return (
      <div className="ItemPrice">
        <h1>
          $
          {itemPrice}
        </h1>
      </div>
    );
  }
}

export default {
  ExclusiveTags,
  SeriesImage,
  ItemName,
  ItemPrice,
};
