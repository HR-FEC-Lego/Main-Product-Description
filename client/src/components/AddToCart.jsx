import React from 'react';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quanity: 1,
    };
    this.quantityUp = this.quantityUp.bind(this);
    this.quantityDown = this.quantityDown.bind(this);
  }

  quantityUp() {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  }

  quantityDown() {
    const { quantity } = this.state;
    this.setState({ quantity: quantity - 1 });
  }

  render() {
    const { inStock, backOrder } = this.props;
    return (
      <div className="CartOptions">
        <Availability inStock={inStock} backOrder={backOrder} />
        Fill in purchase div.
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

export default AddToCart;
