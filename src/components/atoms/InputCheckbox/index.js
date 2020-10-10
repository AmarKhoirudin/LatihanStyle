import React from "react";
import "./index.css";

const InputCheckbox = ({ date, onChangeDay }) => {
  return (
    <div className="InputCheckbox">
      <div className="checkboxscheduller">
        {date.map((day, i) => (
          <label class="containerCheckbox" key={i + 1}>
            {day.day}
            <input
              type="checkbox"
              checked={day.status}
              onChange={() => onChangeDay(i)}
            />
            <span class="checkmark"></span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default InputCheckbox;
