import React from 'react';
import NavLink from '../NavLink';

import './nav.css';

const total = 3450;

const Nav = ({ activeTab, onTabChange, data }) => (
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
        {data} items (${total})
      </li>
    </ul>
  </nav>
);

export default Nav;
