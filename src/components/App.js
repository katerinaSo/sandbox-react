import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layout";
import Todos from "./Todos";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Todos />
        <Footer />
      </Fragment>
    );
  }
}
