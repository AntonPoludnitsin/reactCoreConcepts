import React from "react";
import Button from "./Button"
import "../App.css";

class ControlBlock extends React.PureComponent {
  render = ({ inc, reset, dec } = this.props) => {
       

    return (
      <div className="controlBlock">
        <Button title={"Inc"}          
          action={inc} />
        <Button title={"Reset"}          
          action={reset} />
        <Button title={"Dec"}          
          action={dec} />
      </div>
    );
  };
}

export default ControlBlock;
