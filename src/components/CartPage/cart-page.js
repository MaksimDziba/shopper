import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './cart-page.css';

const CartPage = ({ items }) => {
  return (
    <ul className="CartPage">
      {items.map(item => (
        <li key={item.id} className="CartPage-item">
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
};

CartPage.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired
};

export default CartPage;
