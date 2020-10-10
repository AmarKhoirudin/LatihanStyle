import React from "react";
import "./index.css";
import {InputSms} from "../../components";

const SmsScheduller = () => {
  return (
    <div className="wrapperSmsScheduller">
      <h3 className="title">SMS Scheduller</h3>
      <div style={{marginTop: '4%'}}>
        <InputSms title="Broadcast Name" />
        <InputSms title="Phonebook" type="phonebook" />
        <InputSms title="Message" type="sms" />
      </div>
    </div>
  );
};

export default SmsScheduller;
