import React from 'react';

class ReviewRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundStar: '',
      goldStar: ''
    };
    this.reviewClick = this.reviewClick.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  reviewClick() {
    // e.preventDefault();
    // eslint-disable-next-line no-alert
    alert('Reviews Clicked, route to review section');
  }

  render() {
    const { rating, reviewCount } = this.props;
    return (
      <div className="ReviewRating">
        <div className="RatingStars">
          {rating}
        </div>
        <a className="ReviewCount" href="#reviews" onClick={this.reviewClick}>
          {reviewCount}
          &nbsp;Reviews
        </a>
      </div>
    );
  }
}

export default ReviewRating;
