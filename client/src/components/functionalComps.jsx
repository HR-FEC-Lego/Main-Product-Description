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

  return (
    <input type="image" src={imageLink} alt="series Image" onClick={handleClick} className="SeriesImage" />
  );
}

export default {
  ExclusiveTags,
  SeriesImage,
};
