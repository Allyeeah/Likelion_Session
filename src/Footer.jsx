import React from "react";
import React, { useState } from "react";

const footerfields = [
  label : "회사소개",
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
    }
  return (
      {
          footerfields.map((label, index) => (
            <div
                  key={index}
                  className={`footer-item ${click ? "active" : ""}`}
                  onClick={() => clickHandler(label.name) style={focus === label.name ? { color: 'blue' } : {   color: 'black' } }
            >
              {item}
            </div>
          )),
    }
  );
};

export default Footer;
