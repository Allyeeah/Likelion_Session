import React from "react";

const SignInput = ({ label, placeholder }) => {
  const showButton = label === "아이디";
  return (
    <div>
      <p className="label">{label}</p>
      <input className="input" placeholder={placeholder} />
      {showButton && (
        <div className="optionButton">
          <p>중복확인</p>
        </div>
      )}
    </div>
  );
};

export default SignInput;
