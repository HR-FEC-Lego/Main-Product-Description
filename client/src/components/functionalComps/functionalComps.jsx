/* eslint-disable react/no-array-index-key */
import React from 'react';
import './functionalCompsS.scss';

export function ExclusiveTags(props) {
  const { arr } = props;
  if (!(arr[0])) { return null; }
  const tagItems = arr.map((tag, index) => (
    <div className="ExclusiveTag" id={tag} key={index}>
      {tag}
    </div>
  ));
  return (
    <div className="ExclusiveTagContainer">{ tagItems }</div>
  );
}

export function SeriesImage(props) {
  let { seriesName, imageLink } = props;
  if (imageLink) {
    return (
      <a className="SeriesImageContainer" href={`https://www.lego.com/en-us/themes/${seriesName}`}>
        <img src={imageLink} alt={`${seriesName} Series`} className="SeriesImage" />
      </a>
    );
  }
  return (<div> </div>);
}

export function ItemName(props) {
  const { itemName } = props;
  if (itemName) {
    return (
      <h1 className="ItemHighlightContainer">
        <span className="ItemName">{itemName}</span>
      </h1>
    );
  }
  return (<div> </div>);
}

export function ItemPrice(props) {
  const { itemPrice } = props;
  if (itemPrice) {
    return (
      <div className="ItemHighlightContainer ItemPriceContainer">
        <span className="ItemPrice">
          $
          {itemPrice}
        </span>
      </div>
    );
  }
}

export function SeriesLinks(props) {
  const { seriesTags } = props;
  return (
    <div className="SeriesLinksContainer">
      Shop more like this:
      <ul className="SeriesLinksList">
        {seriesTags.map((tag, index) => {
          const tagLink = tag.replace(' ', '-');
          return (
            <li key={index} className="SeriesLinkEntry">
              <a className="SeriesTag" href={`https://www.lego.com/en-us/categories/${tagLink}`}>{tag}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function OffersFlyer(props) {
  let offerLink = 'https://www.lego.com/en-us/page/lego-offers-promotions';

  let offerLinkText = 'Learn More';

  const {
    offersFlyer: offerStatement,
    signUpOffer,
    offersImageLink,
  } = props;

  if (!offerStatement) {
    return ('');
  }
  if (signUpOffer) {
    offerLinkText = 'Sign Up';
    offerLink = 'https://www.lego.com/en-us/vip/join';
  }

  return (
    <div className="OffersFlyerContainer">
      <img className="OffersFlyerImage" src={offersImageLink} alt="Special Offers" />
      <div className="OffersFlyerInternal">
        <h4 className="OffersFlyerText">
          <span>{offerStatement}</span>
        </h4>
        <a className="OffersFlyerLink" href={offerLink}>{offerLinkText}</a>
      </div>
    </div>
  );
}

export default {
  ExclusiveTags,
  SeriesImage,
  ItemName,
  ItemPrice,
  SeriesLinks,
  OffersFlyer,
};
