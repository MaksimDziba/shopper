import React, { Component } from 'react';
import ItemPage from '../ItemPage';
import CartPage from '../CartPage';
import items from '../../data/static-data';
import Nav from '../Nav';

import './app.css';

class App extends Component {
  state = {
    activeTab: 0,
    cart: []
  };

  handleTabChange = index => {
    this.setState({ activeTab: index });
  };

  handleAddToCart = item => {
    const { cart } = this.state;
    this.setState({
      cart: [...cart, item.id]
    });
  };

  renderContent = ({ activeTab }) => {
    switch (activeTab) {
      default:
      case 0:
        return <ItemPage items={items} onAddToCart={this.handleAddToCart} />;
      case 1:
        return this.renderCart();
    }
  };

  renderCart() {
    const { cart } = this.state;
    // Подсчитать сколько каждого элемента в массиве
    const itemCounts = cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;
    }, {});
    // Создать новый массив items
    const cartItems = Object.keys(itemCounts).map(itemId => {
      // Найти item по его id
      const item = items.find(item => item.id === parseInt(itemId, 10));

      // Создать новый item со свойством count
      return {
        ...item,
        count: itemCounts[itemId]
      };
    });
    return <CartPage items={cartItems} />;
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className="App">
        <Nav activeTab={activeTab} onTabChange={this.handleTabChange} />
        <main className="App-content">{this.renderContent(this.state)}</main>
      </div>
    );
  }
}

export default App;
