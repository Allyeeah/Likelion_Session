import React from "react";

const inputbox = [
  { label: "게시물 제목", placeholder: "질문 제목을 입력하세요." },
  { label: "게시물 내용", placeholder: "질문 내용을 입력하세요." },
];
const ContentBox = () => {
  return (
    <div>
      <p className="label">{inputbox[0].label}</p>
      <input className="inputbox" placeholder={inputbox[0].placeholder} />
      <p className="label">{inputbox[1].label}</p>
      <input className="inputbox" placeholder={inputbox[1].placeholder} />
    </div>
  );
};

export default ContentBox;
