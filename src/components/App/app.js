import React, { Component } from 'react';
import Nav from '../Nav';

import './app.css';

class App extends Component {
  state = {
    activeTab: 0
  };

  handleTabChange = index => {
    this.setState({ activeTab: index });
  };

  renderContent = ({ activeTab }) => {
    switch (activeTab) {
      default:
      case 0:
        return <span>Item list</span>;
      case 1:
        return <span>Card list</span>;
    }
  };

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
