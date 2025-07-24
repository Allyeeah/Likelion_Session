import React from "react";

const btnList = [
  { title: "가산수당", active: true },
  { title: "주휴수당", active: true },
  { title: "야간근로수당", active: false },
  { title: "연장근로수당", active: true },
  { title: "휴일근로수당", active: false },
];

const ButtonContainer = () => {
  return (
    <div>
      <div className="buttons">
        {btnList.map((button, index) => (
          <button key={index} className={button.active ? "btn active" : "btn"}>
            {button.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonContainer;
