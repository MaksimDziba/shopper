import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './item-page.css';

function ItemPage({ items, onAddToCart }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} className="ItemPage-item">
          <Item item={item}>
            <button
              type="button"
              className="Item-addToCart"
              onClick={() => onAddToCart(item)}
            >
              Add to Cart
            </button>
          </Item>
        </li>
      ))}
    </ul>
  );
}

ItemPage.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ItemPage;
