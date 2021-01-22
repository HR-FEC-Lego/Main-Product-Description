import React from 'react';

function SeriesLinks(props) {
  const { seriesTags } = props;
  return (
    <div className="SeriesLinksContainer">
      Shop more like this:
      <ul className="SeriesLinksList">
        {seriesTags.map((tag, index) => (
          <li key={index} className="SeriesLinkEntry">
            <a href={`/en-us/categories/${tag}`}>{tag}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SeriesLinks;
