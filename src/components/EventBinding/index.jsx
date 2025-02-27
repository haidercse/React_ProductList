import React, { Component } from "react";

export default class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increaseHandle = this.increaseHandle.bind(this);
  }

  increaseHandle() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increaseHandle}>Increase</button>
      </div>
    );
  }
}
