import React from 'react';

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: 'Smartphone',
      qty: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbWaGLAE0OjTw6IxgbuKS10xgaIuVPhjSvg&usqp=CAU',
    };
  }

  increaseQuantity = () => {
    console.log('this', this.state);
  }

  render() {
    const { price, title, qty, img } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img alt="" style={styles.image} src={img}/>
        </div>
        <div className="right-block">
          <div style={{ fontSize: '25px' }}> {title} </div>
          <div style={{ color: '#777' }}>Rs. {price} </div>
          <div style={{ color: '#777' }}>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              onClick = {this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons.flaticon.com/png/512/3114/premium/3114894.png?token=exp=1645302273~hmac=051a29408a31fdd9cb1996583415af9f"
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons.flaticon.com/png/512/4387/premium/4387288.png?token=exp=1645302406~hmac=e886891bdebb4b02b34cd95d454d2e5c"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc',
  },
};

export default CartItem;
