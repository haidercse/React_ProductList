import React, { Component } from "react";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const { isLoggedIn } = this.state;
    return <div>{isLoggedIn ? <HomePage /> : <LoginPage />}</div>;
  }
}
