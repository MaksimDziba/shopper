import React from 'react';
import PropTypes from 'prop-types';
import NavLink from '../NavLink';

import './nav.css';

const Nav = ({ activeTab, onTabChange, data, price }) => (
  <nav className="App-nav">
    <ul>
      <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
        <NavLink index={0} onClick={onTabChange}>
          Items
        </NavLink>
      </li>
      <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
        <NavLink index={1} onClick={onTabChange}>
          Cart
        </NavLink>
      </li>
      <li className="App-nav-cart">
        <i className="fa fa-shopping-cart" aria-hidden="true" />
        {data.length} items (${price.toFixed(2)})
      </li>
    </ul>
  </nav>
);

Nav.propTypes = {
  activeTab: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  price: PropTypes.number.isRequired
};

export default Nav;
