import React, { Component } from 'react';
import ItemPage from '../ItemPage';
import CartPage from '../CartPage';
import items from '../../data/static-data';
import Nav from '../Nav';

import './app.css';

class App extends Component {
  state = {
    activeTab: 0,
    cart: [],
    cartTotalPrice: 0,
    cartTotalCounts: 0
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

  handleRemoveOne = item => {
    const { cart } = this.state;
    const idx = cart.indexOf(item.id);
    this.setState({
      cart: [...cart.slice(0, idx), ...cart.slice(idx + 1)]
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
    const itemCounts = cart.reduce((itemOrder, itemId) => {
      // такой код, только из-за ошибок eslint
      const itemSum = itemOrder;
      itemSum[itemId] = itemSum[itemId] || 0;
      itemSum[itemId] += 1;
      return itemSum;
    }, {});
    // console.log(itemCounts);  {0: 1, 2: 4}

    // Создать новый массив items
    const cartItems = Object.keys(itemCounts).map(itemId => {
      // Найти item по его id
      const findItem = items.find(item => item.id === parseInt(itemId, 10));

      // Создать новый item со свойством count
      return {
        ...findItem,
        count: itemCounts[itemId]
      };
    });

    const cartTotalPrice = cartItems.reduce((sum, item) => {
      let total = sum;
      total += item.price * item.count;
      return total;
    }, 0);

    const cartTotalCounts = Object.values(itemCounts).reduce(
      (sum, value) => sum + value
    );

    this.setState({
      cartTotalCounts
    });

    return (
      <CartPage
        items={cartItems}
        onAddOne={this.handleAddToCart}
        onRemoveOne={this.handleRemoveOne}
        totalPrice={cartTotalPrice.toFixed(2)}
      />
    );
  }

  render() {
    const { activeTab, cartTotalCounts } = this.state;
    return (
      <div className="App">
        <Nav
          activeTab={activeTab}
          onTabChange={this.handleTabChange}
          data={cartTotalCounts}
        />
        <main className="App-content">{this.renderContent(this.state)}</main>
      </div>
    );
  }
}

export default App;
