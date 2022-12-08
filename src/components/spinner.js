import React, { Component } from "react";
import load from "./loading.gif";
export class spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={load} alt="loading"></img>
      </div>
    );
  }
}

export default spinner;
