import React from "react";
import Button from "./Button"
import "../App.css";

class ControlBlock extends React.PureComponent {
  render = ({ value, maxValue, minValue, inc, reset, dec } = this.props) => {
    const isDisabledInc = value < maxValue ? false : true;
    const isDisabledDec = value > minValue ? false : true;
    const isDisabledClassInc =
      value < maxValue ? "" : "disable";
    const isDisabledClassDec =
      value > minValue ? "" : "disable";
    return (
      <div className="controlBlock">
        <Button title={"Inc"}
          style={isDisabledClassInc}
          disabled={isDisabledInc}
          action={inc} />
        <Button title={"Reset"}
          style={isDisabledClassInc}
          disabled={isDisabledInc}
          action={reset} />
        <Button title={"Dec"}
          style={isDisabledClassDec}
          disabled={isDisabledDec}
          action={dec} />
      </div>
    );
  };
}

export default ControlBlock;
