import React from 'react';
import { useSelector } from 'react-redux';

export default function Cartscreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="cart-title">Warenkorb</h2>

          {cartItems.map((item, index) => (
            <div key={index} className="product-container">
              <div className="item-info">
                <img
                  src={item.image}
                  alt={item.name}
                  className="item-image cart-image"
                />
                <div className="item-details">
                  <h1 className="item-title">{item.name}</h1>
                  <p className="item-variant">{item.variant}</p>
                  <p className="item-price">
                    Price: {item.quantity} * {item.prices[0][item.variant]} = {item.price}
                  </p>
                  <div className="quantity-container">
                    <h1 className="quantity-label">Quantity:</h1>
                    <div className="quantity-controls">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                      <b>{item.quantity}</b>
                      <i className="fa fa-minus" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
