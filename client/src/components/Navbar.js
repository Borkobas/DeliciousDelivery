import React from 'react';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  // Calculate the total number of items in the cart
  const getTotalItemsCount = () => {
    let totalCount = 0;
    cartItems.forEach((item) => {
      totalCount += item.quantity;
    });
    return totalCount;
  };

  // Handle click event for Admin Panel
  const handleAdminPanelClick = () => {
    // Redirect or navigate to the AdminScreen
    window.location.href = '/admin';
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          Delicious Delivery
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" onClick={handleAdminPanelClick}>
                Admin Panel
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Warenkorb ({getTotalItemsCount()})
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
