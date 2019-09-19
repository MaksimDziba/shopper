import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './cart-page.css';

function CartPage({ items, onAddOne, onRemoveOne, totalPrice }) {
  return items.length ? (
    <ul className="CartPage">
      {items.map(item => (
        <li key={item.id} className="CartPage-item">
          <Item item={item}>
            <div className="CartItem-controls">
              <button
                type="button"
                className="CartItem-removeOne"
                onClick={() => onRemoveOne(item)}
              >
                &ndash;
              </button>
              <span className="CartItem-count">{item.count}</span>
              <button
                type="button"
                className="CartItem-addOne"
                onClick={() => onAddOne(item)}
              >
                +
              </button>
            </div>
          </Item>
        </li>
      ))}
      <li className="CartPage-totalPrice">Total: ${totalPrice}</li>
    </ul>
  ) : (
    <div className="CartPage-empty">
      <div>Your cart is empty</div>
      <div>Why not add some expensive products to it?</div>
    </div>
  );
}

CartPage.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;
