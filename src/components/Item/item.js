import React from 'react';
import PropTypes from 'prop-types';
import './item.css';

const Item = ({ item, onAddToCart }) => {
  return (
    <div className="Item">
      <div className="Item-left">
        <div className="Item-image" />
        <div className="Item-title">{item.name}</div>
        <div className="Item-description">{item.description}</div>
      </div>
      <div className="Item-right">
        <div className="Item-price">${item.price}</div>
        <button type="button" className="Item-addToCart" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }),
  onAddToCart: PropTypes.func.isRequired
};

Item.defaultProps = {
  item: {
    name: 'name',
    description: 'description',
    price: 1234
  }
};

export default Item;
