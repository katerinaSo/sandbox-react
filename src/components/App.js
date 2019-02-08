import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layout";
import Todos from "./Todos";
import { categories, items } from "../storeInfo";

export default class App extends Component {
  state = {
    items
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

  render() {
    const items = this.getItemsByCat();
    return (
      <Fragment>
        <Header />
        <Todos items={items} />
        <Footer categories={categories} />
      </Fragment>
    );
  }
}
