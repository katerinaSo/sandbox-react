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
    const initialCat = categories.reduce(
      (catAccum, category) => ({
        ...catAccum,
        [category]: []
      }),
      {}
    );
    return Object.entries(
      this.state.items.reduce((itemsAcc, item) => {
        const { category } = item;

        itemsAcc[category] = [...itemsAcc[category], item];
        return itemsAcc;
      }, initialCat)
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
  handleItemDelete = id => {
    this.setState(({ items }) => ({
      items: items.filter(item => item.id !== id)
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
          onDelete={this.handleItemDelete}
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
