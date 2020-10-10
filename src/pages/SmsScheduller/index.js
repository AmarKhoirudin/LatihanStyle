import React from "react";
import "./index.css";
import { InputSms, InputCheckbox, Button } from "../../components";

const date = [
  { day: "Mon", status: true },
  { day: "Tue", status: true },
  { day: "Wed", status: false },
  { day: "Thu", status: false },
  { day: "Fri", status: false },
  { day: "Sat", status: false },
  { day: "Sun", status: true },
];

const SmsScheduller = () => {
  const [date, setDate] = React.useState([
    { day: "Mon", status: true },
    { day: "Tue", status: true },
    { day: "Wed", status: false },
    { day: "Thu", status: false },
    { day: "Fri", status: false },
    { day: "Sat", status: false },
    { day: "Sun", status: true },
  ]);
  const [radio, setRadio] = React.useState(false);
  const [radio2, setRadio2] = React.useState(false);
  const [hours, setHours] = React.useState(2);
  const [PMAM, setPMAM] = React.useState(hours >= 12 ? "PM" : "AM");

  const onChangeDay = (day) => {
    const dataa = date.filter((item, i) => {
      if (day === i) {
        item.day = item.day;
        item.status = !item.status;
        return item;
      } else {
        return item;
      }
    });
    setDate(dataa);
  };

  const onChangeHours = (e) => {
    if (e.target.value <= 24) {
      if (e.target.value > 12) {
        setHours(e.target.value);
        setPMAM("PM");
      } else {
        setHours(e.target.value);
        setPMAM("AM");
      }
    }
  };

  return (
    <div className="wrapperSmsScheduller">
      <h3 className="title">SMS Scheduller</h3>
      <div style={{ marginTop: "4%" }}>
        <InputSms title="Broadcast Name" />
        <InputSms title="Phonebook" type="phonebook" />
        <InputSms title="Message" type="sms" />
      </div>
      <div className="shceduller">
        <p className="title">Schedule</p>
        <p className="description">
          When and how often do you want to broadcast this messages?
        </p>
        <div className="run">
          <p>Run on</p>
          <div style={{ marginTop: "2.5%", marginLeft: "2.5%" }}>
            <InputCheckbox date={date} onChangeDay={(i) => onChangeDay(i)} />
            {/* radion on */}
            <div className="radioBox">
              <div>
                <label className="container">
                  Once a day
                  <input
                    type="radio"
                    checked={radio}
                    onChange={() => setRadio(!radio)}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <span className="spanClass margin">
                At
                <div className={`costumeNumber ${!radio ? "disabled" : ""}`}>
                  <input
                    type="number"
                    max="24"
                    min="0"
                    value={hours}
                    onChange={(e) => onChangeHours(e)}
                  />
                  <span>{PMAM}</span>
                </div>
                WIB
              </span>
            </div>
            <div className="radioBox wrapperIntervals">
              <div>
                <label className="container">
                  At Intervals
                  <input
                    type="radio"
                    value={radio2}
                    onChange={() => setRadio2(!radio2)}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <span className="spanClass">
                Every
                <div className="costumeNumber intervals">
                  <input
                    type="number"
                    max="24"
                    min="0"
                    value={hours}
                    onChange={(e) => onChangeHours(e)}
                    disabled={!radio2}
                  />
                </div>
                <div className={`costumeNumber ${!radio2 ? "disabled" : ""}`}>
                  <input
                    type="number"
                    max="24"
                    min="0"
                    // value={hours}
                    // onChange={(e) => onChangeHours(e)}
                  />
                  <span>Hours</span>
                </div>
                <span className="spanClass nomargin">
                  from
                  <div className={`costumeNumber ${!radio ? "disabled" : ""}`}>
                    <input
                      type="number"
                      max="24"
                      min="0"
                      value={hours}
                      onChange={(e) => onChangeHours(e)}
                    />
                    <span>{PMAM}</span>
                  </div>
                  WIB
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
        {/* Button Save */}
        <div className="buttonSave">
          <div className="buttonSavebantuan">
            <Button titlle="Send messages" />
          </div>
        </div>
    </div>
  );
};

export default SmsScheduller;
