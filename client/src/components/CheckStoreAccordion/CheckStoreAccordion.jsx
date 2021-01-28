import React from 'react';
import './CheckStoreAccordionS.scss';

class CheckStoreAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accordionOpen: false,
      addressForm: '',
    };
    this.accordionOperator = this.accordionOperator.bind(this);
    this.addressChange = this.addressChange.bind(this);
  }

  addressSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  addressChange(e) {
    this.setState({ addressForm: e.target.value });
  }

  accordionOperator() {
    const { accordionOpen } = this.state;
    this.setState({ accordionOpen: !accordionOpen });
  }

  render() {
    const { accordionOpen, addressForm } = this.state;
    let accordionBody = '';
    if (accordionOpen) {
      accordionBody = (
        <div className="AccordionBodyWrapper" style={{ height: 'auto' }}>
          <div className="AccordionBodyContent">
            <div className="AccordionTextWrapper">
              <p>
                Enter your address to find a LEGO Store near you. Please call to ensure
                item availability and inquire about the possibility for curbside pick-up.
              </p>
              <div className="inputWithButton">
                <div className="inputWrapper">
                  <label className="inputLabel" htmlFor="address">
                    <input type="text" className="inputBar" value={addressForm} onChange={this.addressChange} />
                  </label>
                </div>
                <button type="submit" kind="secondary" className="submitButton" onClick={this.addressSubmit}>
                  <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M 18 16.615 c 0 0.375 -0.137 0.7 -0.412 0.973 a 1.331 1.331 0 0 1 -0.973 0.412 a 1.28 1.28 0 0 1 -0.973 -0.412 l -3.71 -3.7 a 7.41 7.41 0 0 1 -4.317 1.342 c -1.03 0 -2.017 -0.2 -2.958 -0.6 a 7.616 7.616 0 0 1 -2.434 -1.623 a 7.605 7.605 0 0 1 -1.622 -2.433 A 7.472 7.472 0 0 1 0 7.616 c 0 -1.032 0.2 -2.018 0.6 -2.96 a 7.65 7.65 0 0 1 1.623 -2.433 A 7.616 7.616 0 0 1 4.657 0.601 A 7.49 7.49 0 0 1 7.615 0 c 1.032 0 2.018 0.2 2.959 0.601 c 0.94 0.4 1.752 0.941 2.434 1.622 a 7.624 7.624 0 0 1 1.622 2.434 c 0.4 0.941 0.601 1.927 0.601 2.959 a 7.403 7.403 0 0 1 -1.342 4.316 l 3.71 3.71 c 0.267 0.266 0.401 0.592 0.401 0.973 m -5.539 -9 c 0 -1.334 -0.474 -2.475 -1.423 -3.423 C 10.09 3.244 8.95 2.77 7.615 2.77 c -1.333 0 -2.475 0.474 -3.423 1.422 C 3.243 5.14 2.77 6.28 2.77 7.616 c 0 1.334 0.474 2.475 1.423 3.423 c 0.948 0.949 2.09 1.422 3.423 1.422 c 1.335 0 2.475 -0.473 3.423 -1.422 c 0.95 -0.948 1.423 -2.09 1.423 -3.423" fillRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="CheckStoreAccordionWrapper">
        <button type="button" className="AccordionButton" onClick={this.accordionOperator}>
          <div className="CheckStoreTitle">
            <span>Check Store Stock</span>
            <div className="AccordionIcon" />
          </div>
        </button>
        {accordionBody}
      </div>
    );
  }
}

export default CheckStoreAccordion;
