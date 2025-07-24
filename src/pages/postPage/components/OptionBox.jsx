import React from "react";

const options = ["내면 탐방", "내면 정보"];

const OptionBox = () => {
  return (
    <div
      className="optionbox"
      style={{ display: "flex", gap: "16px", background: "#fff" }}
    >
      {options.map((option, index) => (
        <div key={index} className="option-box">
          <input
            type="radio"
            id={`option-${index}`}
            name="board"
            value={option}
          />
          <label htmlFor={`option-${index}`}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default OptionBox;
