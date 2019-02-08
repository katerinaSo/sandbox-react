import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layout";
import Todos from "./Todos";
import { categories, items } from "../storeInfo";

export default class App extends Component {
  state = {
    items,
    item: {}
  };
  getItemsByCat() {
    return Object.entries(
      this.state.items.reduce((itemsAcc, item) => {
        const { category } = item;

        itemsAcc[category] = itemsAcc[category]
          ? [...itemsAcc[category], item]
          : [item];
        return itemsAcc;
      }, {})
    );
  }
  handleCatSelected = category => {
    this.setState({
      category
    });
  };

  handleItemSelected = id => {
    this.setState(({ items }) => ({
      item: items.find(ex => ex.id === id)
    }));
  };
  handleItemCreated = item => {
    this.setState(({ items }) => ({
      items: [...items, item]
    }));
  };

  render() {
    const items = this.getItemsByCat();
    const { category, item } = this.state;
    return (
      <Fragment>
        <Header
          categories={categories}
          onItemCreated={this.handleItemCreated}
        />
        <Todos
          item={item}
          items={items}
          category={category}
          onSelectItem={this.handleItemSelected}
        />
        <Footer
          category={category}
          categories={categories}
          onSelect={this.handleCatSelected}
        />
      </Fragment>
    );
  }
}
