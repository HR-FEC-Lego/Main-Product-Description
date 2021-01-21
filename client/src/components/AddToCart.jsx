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
      <QuantityButton label="-" action={decreaseAction} name="QuantityDecrease" inActive={quantity === 1} />
      <div className="QuantityShow">{quantity}</div>
      <QuantityButton label="+" action={increaseAction} name="QuantityIncrease" inActive={quantity >= quantLimit} />
      <QuantLimits quantLimit={quantLimit} />
    </div>
  );
}

function QuantityButton(props) {
  const {
    label, action, name, inActive
  } = props;
  return (
    <div className="QuantityButton">
      <button type="button" id={name} onClick={action} disabled={inActive}>{label}</button>
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
      <button type="button" onClick={popupClick}>Learn More</button>
    </div>
  );
}

function PurchaseButton(props) {
  const { buyAble, buttonText, purchaseHandler } = props;

  // if (!buyAble) {
  //   return (
  //     <div className="OutOfStockButton">Out of Stock</div>
  //   );
  // }
  return (
    <button type="button" className="PurchaseButton" onClick={purchaseHandler} disabled={!buyAble}>{buttonText}</button>
  );
}

export default AddToCart;
