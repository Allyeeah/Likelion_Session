import React, { useState } from "react";

const footerfields = [
  "회사소개",
  "이용약관",
  "개인정보처리방침",
  "고객센터",
  "이메일 무단수집 거부",
  "이용안내",
];

const Footer = () => {
  const [focus, setFocus] = useState("");

  const clickHandler = (name) => {
    setFocus(name);
  };

  return (
    <div className="footer">
      {footerfields.map((label, index) => (
        <div
          key={index}
          className={`footer-item ${focus === label ? "active" : ""}`}
          onClick={() => clickHandler(label)}
          style={{
            color: focus === label ? "blue" : "black",
            cursor: "pointer",
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default Footer;
