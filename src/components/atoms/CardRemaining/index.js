import React from "react";
import "./index.css";

const CardRemaining = ({ title, type, number }) => {
  const styling = type === "1" ? "number1" : type === "2" ? "number2" : "number3";
  return (
    <div className="wrapperCardRemaining">
      <p className="call">{title}</p>
      <p className={` number ${styling}`}>{number}</p>
    </div>
  );
};

export default CardRemaining;
