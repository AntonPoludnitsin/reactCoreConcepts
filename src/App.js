import React, { Component } from "react";
import "./App.css";
import ControlBlock from "./components/ControlBlock";
import DisplayBlock from "./components/DisplayBlock";

class App extends Component {
  constructor() {
    super();
    this.decreaseValue = this.decreaseValue.bind(this);
  }

  state = {
    currentValue: 0
  };

  maxValue = 5;
  minValue = -5;

  increaseValue = () => {
    if (this.state.currentValue < this.maxValue) {
      this.setState({
        currentValue: this.state.currentValue + 1
      });
    }
  };
  decreaseValue() {
    if (this.state.currentValue > this.minValue) {
      this.setState({
        currentValue: this.state.currentValue - 1
      });
    }
  }

  resetValue = () => {
    this.setState({
      currentValue: 0
    });
  };

  render = () => {
    return (
      <div className="App">
        <div className="mainBlock">
          <DisplayBlock
            currentValue={this.state.currentValue}
            maxValue={this.maxValue}
            minValue={this.minValue}
          />
          <ControlBlock 
            inc={this.increaseValue}
            dec={this.decreaseValue}
            reset={this.resetValue}
          />
        </div>
      </div>
    );
  };
}

export default App;
