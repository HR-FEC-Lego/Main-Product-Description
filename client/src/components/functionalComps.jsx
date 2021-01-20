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

export default {
  ExclusiveTags,
};
