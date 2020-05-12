import React from "react";
import "../App.css";

const DisplayBlock = ({ maxValue, minValue, currentValue }) => {
  let colorValue =
    (currentValue === maxValue || currentValue === minValue) 
    ? "colorValue" : "";

  return (
    <div className={`displayValue ${colorValue}`}>{currentValue}</div>
  );
};

export default DisplayBlock;
