import React, { Component } from "react";
import Key from "./Key";
import Results from "./Results";
export class Calcs extends Component {
  state = {
    result: "",
  };

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    var checkResult = this.state.result;

    try {
      this.setState({
        result: eval(checkResult) || "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
          <Results result={this.state.result} />
          <Key onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default Calcs;
