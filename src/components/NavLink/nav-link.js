import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavLink extends Component {
  handleClick = () => {
    const { index, onClick } = this.props;
    onClick(index);
  };

  render() {
    const { children } = this.props;
    return (
      <button type="button" onClick={this.handleClick}>
        {children}
      </button>
    );
  }
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired
};

export default NavLink;
