import React from "react";
import { UnionRed } from "../../../Assets";
import TypeSms from "./TypeSms";
import "./index.css";

const InputSms = ({ title, type }) => {
  if (type === "phonebook") {
    return (
      <div>
        <p className="titleInputSms">{title}</p>
        <div className="wrapperInputType">
          <p>name of your broadcast</p>
          <img src={UnionRed} alt="UnionIcon" />
        </div>
      </div>
    );
  }
  if (type === "sms") {
    return <TypeSms title={title} />
  }
  return (
    <div>
      <p className="titleInputSms">{title}</p>
      <div className="wrapperInputSms">
        <input
          type="text"
          placeholder="name of your broadcast"
          color="#DEDEDE"
        />
      </div>
    </div>
  );
};

export default InputSms;
