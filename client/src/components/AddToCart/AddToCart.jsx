import React from 'react';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.quantityUp = this.quantityUp.bind(this);
    this.quantityDown = this.quantityDown.bind(this);
    this.purchaseClick = this.purchaseClick.bind(this);
    const { addToCart } = this.props;
    this.addToCart = addToCart;
  }

  quantityUp() {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  }

  quantityDown() {
    const { quantity } = this.state;
    this.setState({ quantity: quantity - 1 });
  }

  purchaseClick() {
    const { quantity } = this.state;
    this.addToCart(quantity);
  }

  render() {
    const { quantity } = this.state;
    const { inStock, backOrder, quantLimit } = this.props;
    const buyAble = (inStock || backOrder);
    let buttonText = '';
    if (inStock) {
      buttonText = 'Add to Bag';
    } else if (backOrder) {
      buttonText = 'Backorder';
    } else { buttonText = 'Out of Stock'; }
    return (
      <div className="CartOptions">
        <Availability inStock={inStock} backOrder={backOrder} />
        <QuantityBar
          quantity={quantity}
          decreaseAction={this.quantityDown}
          increaseAction={this.quantityUp}
          quantLimit={quantLimit}
        />
        <PurchaseButton
          buyAble={buyAble}
          buttonText={buttonText}
          purchaseHandler={this.purchaseClick}
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
        Backorders accepted, will ship in &nbsp;
        {backOrder}
        &nbsp;days
      </span>
    );
  } else {
    output = <span>Currently Out of Stock.</span>;
  }
  return (
    <div className="Availability">
      {output}
    </div>
  );
}

function QuantityBar(props) {
  const {
    quantity, decreaseAction, increaseAction, quantLimit
  } = props;
  return (
    <div>
      <QuantityButton action={decreaseAction} name="QuantityDecrease" inActive={quantity === 1} />
      <div className="QuantityShow">{quantity}</div>
      <QuantityButton action={increaseAction} name="QuantityIncrease" inActive={quantity >= quantLimit} />
      <QuantLimits quantLimit={quantLimit} />
    </div>
  );
}

function QuantityButton(props) {
  let icon;
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
  } else {
    icon = <SubtractIcon fill={fillColor} />;
  }
  return (
    <div className="QuantityButton">
      <button type="button" id={name} onClick={action} disabled={inActive}>{icon}</button>
    </div>
  );
}

function QuantLimits(props) {
  function popupClick(e) {
    e.preventDefault();
    const notice = 'We restrict the limit a household can buy in order to be fair to all of our fans. If you\'ve already reached that limit through previous orders your order may be cancelled';
    // eslint-disable-next-line no-alert
    alert(notice);
  }
  const { quantLimit } = props;
  return (
    <div className="QuantityLimit">
      <span>
        Limit &nbsp;
        {quantLimit}
      </span>
      <button className="InfoButton" type="button" label="Click for more info" aria-label="Click for more info" onClick={popupClick}>i</button>
    </div>
  );
}

function PurchaseButton(props) {
  const { buyAble, buttonText, purchaseHandler } = props;

  return (
    <button type="button" className="PurchaseButton" onClick={purchaseHandler} disabled={!buyAble}>{buttonText}</button>
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
