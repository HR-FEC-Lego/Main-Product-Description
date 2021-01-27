import React from 'react';
import './AddToCartS.scss';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      modals: {
        limitModal: false,
        purchaseModal: false,
      },
    };
    this.quantityUp = this.quantityUp.bind(this);
    this.quantityDown = this.quantityDown.bind(this);
    this.purchaseClick = this.purchaseClick.bind(this);
    const { addToCart } = this.props;
    this.addToCart = addToCart;
    this.modalToggle = this.modalToggle.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }

  // componentDidMount() {
  //   // document.body.addEventListener('click', this.modalClose);
  // }

  quantityUp(e) {
    e.preventDefault();
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  }

  quantityDown(e) {
    e.preventDefault();
    const { quantity } = this.state;
    this.setState({ quantity: quantity - 1 });
  }

  purchaseClick(e) {
    e.preventDefault();
    const { quantity } = this.state;
    // use modalToggle
    this.setState({ modals: { purchaseModal: true } });
    this.addToCart(quantity);
  }

  modalClose(e) {
    e.preventDefault();
    console.log(e);
    document.body.removeEventListener('click', this.modalClose);
    this.setState({ modals: { purchaseModal: false, limitModal: false } });
  }

  modalToggle(e, type) {
    e.preventDefault();
    const {
      modals: {
        [type]: modalState,
        ...otherModalData
      },
    } = this.state;
    if (!modalState) {
      document.body.addEventListener('click', this.modalClose);
    }
    this.setState({ modals: { [type]: !modalState, ...otherModalData } });
  }

  render() {
    const { quantity, modals: { limitModal, purchaseModal } } = this.state;
    const { inStock, backOrder, quantLimit } = this.props;
    const buyAble = (inStock || backOrder);
    let buttonText = '';
    if (inStock) {
      buttonText = 'Add to Bag';
    } else if (backOrder) {
      buttonText = 'Backorder';
    }
    if (!buyAble) {
      return (
        <div className="CartOptions">
          <Availability inStock={inStock} backOrder={backOrder} />
        </div>
      );
    }
    return (
      <div className="CartStyles">
        <div className="CartOptions">
          <Availability inStock={inStock} backOrder={backOrder} />
          <QuantityBar
            quantity={quantity}
            decreaseAction={this.quantityDown}
            increaseAction={this.quantityUp}
            quantLimit={quantLimit}
            limitModal={limitModal}
            modalToggle={this.modalToggle}
          />
        </div>
        <PurchaseButton
          buyAble={buyAble}
          buttonText={buttonText}
          purchaseHandler={this.purchaseClick}
          purchaseModal={purchaseModal}
          modalToggle={this.modalToggle}
        />
      </div>

    );
  }
}

function Availability(props) {
  let output;
  const { inStock, backOrder } = props;
  if (inStock) {
    output = <span>Available now</span>;
  } else if (backOrder) {
    output = (
      <span>
        Backorders accepted, will ship in&nbsp;
        {backOrder}
        &nbsp;days.
      </span>
    );
  } else {
    output = <span style={{ color: 'red' }}>Sold Out</span>;
  }
  return (
    <p className="Availability">
      {output}
    </p>
  );
}

function QuantityBar(props) {
  const {
    quantity, decreaseAction, increaseAction, quantLimit, limitModal, modalToggle,
  } = props;
  return (
    <div className="QuantityBar">
      <div className="QuantitySelectWrapper">
        <QuantityButton action={decreaseAction} name="QuantityDecrease" inActive={quantity === 1} />
        <div className="QuantityShow">{quantity}</div>
        <QuantityButton action={increaseAction} name="QuantityIncrease" inActive={quantity >= quantLimit} />
      </div>
      <QuantLimits quantLimit={quantLimit} limitModal={limitModal} modalToggle={modalToggle} />
    </div>
  );
}

function QuantityButton(props) {
  let icon;
  let borderStyle;
  let fillColor;
  const {
    action, name, inActive
  } = props;
  if (inActive) {
    fillColor = '#E0E0E0';
  } else {
    fillColor = 'black';
  }
  if (name === 'QuantityIncrease') {
    icon = <AddIcon fill={fillColor} />;
    borderStyle = { borderRadius: '0px 5px 5px 0px' };
  } else {
    icon = <SubtractIcon fill={fillColor} />;
    borderStyle = { borderRadius: '5px 0px 0px 5px' };
  }
  return (
    <button className="QuantityButton" type="button" id={name} onClick={action} disabled={inActive} style={borderStyle}>{icon}</button>
  );
}

function QuantLimits(props) {
  const notice = 'We restrict the limit a household can buy in order to be fair to all of our fans. If you\'ve already reached that limit through previous orders your order may be cancelled';
  const { quantLimit, limitModal, modalToggle } = props;
  return (
    <div className="QuantityLimit">
      <span>
        Limit &nbsp;
        {quantLimit}
      </span>
      <button className="InfoButton" type="button" label="Click for more info" aria-label="Click for more info" onClick={(e) => { modalToggle(e, 'limitModal'); }}>
        <span>i</span>
      </button>
      <LimitModal show={limitModal} modalToggle={modalToggle} type="limitModal" title="Limit" notice={notice} />
    </div>
  );
}

function LimitModal(props) {
  const { show, modalToggle, type, title, notice} = props;
  if (!show) { return ''; }
  return (
    <div className="LimitModal" role="tooltip" aria-hidden={!show}>
      <div className="LimitModalArrow" />
      <button type="button" className="LimitModalClose" onClick={(e) => { modalToggle(e, type); }}>
        <svg viewBox="0 0 17 17" width="17px" height="17px" aria-hidden="true">
          <path d="M 10.377 8.142 l 5.953 -5.954 l -2.234 -2.234 l -5.954 5.954 L 2.188 -0.046 L -0.046 2.188 l 5.954 5.954 l -5.954 5.954 l 2.234 2.234 l 5.954 -5.953 l 5.954 5.953 l 2.234 -2.234 Z" fill="currentColor" fillRule="evenOdd">Close</path>
        </svg>
      </button>
      <div className="LimitModalInnerContent">
        <p><span>{title}</span></p>
        <div className="LimitModalMessage">
          <p>{notice}</p>
        </div>
      </div>
    </div>
  );
}

function PurchaseModal(props) {
  const { show, modalToggle, type, notice} = props;
  if (!show) { return ''; }
  return (
    <div className="PurchaseModal" role="tooltip" aria-hidden={!show}>
      <button type="button" className="PurchaseModalClose" onClick={(e) => { modalToggle(e, type); }}>
        <svg viewBox="0 0 17 17" width="17px" height="17px" aria-hidden="true">
          <path d="M 10.377 8.142 l 5.953 -5.954 l -2.234 -2.234 l -5.954 5.954 L 2.188 -0.046 L -0.046 2.188 l 5.954 5.954 l -5.954 5.954 l 2.234 2.234 l 5.954 -5.953 l 5.954 5.953 l 2.234 -2.234 Z" fill="currentColor" fillRule="evenOdd">Close</path>
        </svg>
      </button>
      <div className="PurchaseModalInnerContent">
        <div className="PurchaseModalMessage">
          <p>{notice}</p>
        </div>
      </div>
    </div>
  );
}

function PurchaseButton(props) {
  const notice = 'Added to Cart!';
  const {
    buyAble, buttonText,
    purchaseHandler, purchaseModal, modalToggle
  } = props;

  return (
    <div className="PurchaseButtonWrapper">
      <PurchaseModal
        show={purchaseModal}
        modalToggle={modalToggle}
        type="purchaseModal"
        notice={notice}
      />
      <button type="button" className="PurchaseButton" onClick={purchaseHandler} disabled={!buyAble}>
        {buttonText}
      </button>
    </div>
  );
}

function AddIcon(props) {
  const { fill } = props;
  return (
    <svg className="AddIcon" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" aria-hidden="true">
      <polygon fill={fill} points="14 8 0 8 0 6 14 6">Add Icon</polygon>
      <rect fill={fill} fillRule="nonzero" x="6" y="0" width="2" height="14">Add Icon</rect>
    </svg>
  );
}

function SubtractIcon(props) {
  const { fill } = props;
  return (
    <svg className="SubtractIcon" xmlns="http://www.w3.org/2000/svg" width="14px" height="2px" viewBox="0 0 14 2" aria-hidden="true">
      <polygon fill={fill} points="14 2 0 2 0 -6 14 -6">Subtract Icon</polygon>
    </svg>
  );
}

export default AddToCart;
