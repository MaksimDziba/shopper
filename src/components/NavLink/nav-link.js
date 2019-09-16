import React, { Component } from 'react';

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

export default NavLink;
