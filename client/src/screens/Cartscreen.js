import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, deleteFromCart } from '../actions/cartActions';

export default function Cartscreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    console.log('Adding item to cart:', item);
    dispatch(addToCart(item, 1, item.variant));
  };

  const handleRemoveFromCart = (item) => {
    if (item.quantity > 1) {
      console.log('Removing item from cart:', item);
      dispatch(removeFromCart(item, 1, item.variant));
    }
  };

  const handleDeleteFromCart = (item) => {
    console.log('Deleting item from cart:', item);
    dispatch(deleteFromCart(item));
  };

  // Calculate the total sum in the cart
  const calculateTotalSum = () => {
    let sum = 0;
    for (const item of cartItems) {
      sum += item.price;
    }
    return sum;
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Warenkorb</h2>

      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="item-image-container">
              <img src={item.image} alt={item.name} className="item-image" />
            </div>
            <div className="item-details">
              <h1 className="item-title">{item.name}</h1>
              <p className="item-variant">{item.variant}</p>
              <p className="item-price">
                Price: {item.quantity} * {item.prices && item.prices[item.variant] && item.prices[item.variant][0]} = {item.price}
              </p>
              <div className="quantity-controls">
                <button className="quantity-btn" onClick={() => handleRemoveFromCart(item)}>
                  <i className="fa fa-minus" aria-hidden="true"></i>
                </button>
                <span className="quantity-text">{item.quantity}</span>
                <button className="quantity-btn" onClick={() => handleAddToCart(item)}>
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
              </div>
              <button className="delete-btn" onClick={() => handleDeleteFromCart(item)}>
                <i className="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="total-sum">Total Sum: {calculateTotalSum()}</div>
      


      <style jsx>{`
        .cart-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cart-title {
          text-align: center;
          margin-bottom: 1rem;
        }

        .cart-items {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .cart-item {
          display: flex;
          gap: 1rem;
          align-items: center;
          border-bottom: 1px solid black;
          padding-bottom: 1rem;
        }

        .item-image {
          width: 80px;
          height: 80px;
        }

        .item-details {
          display: flex;
          flex-direction: column;
        }

        .item-title {
          font-size: 20px;
          margin: 0;
        }

        .item-variant,
        .item-price {
          font-size: 14px;
          margin: 0;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .quantity-btn {
          border: none;
          background: none;
          cursor: pointer;
        }

        .quantity-text {
          font-size: 14px;
          font-weight: bold;
        }

        .delete-btn {
          border: none;
          background: none;
          cursor: pointer;
          color: red;
        }
      `}</style>
    </div>
  );
}

