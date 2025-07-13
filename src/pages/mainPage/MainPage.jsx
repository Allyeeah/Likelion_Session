import React from "react";
import "./main.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const mainFields = [
  {
    number: "1",
    title: "내 계약서 검토",
    description:
      "우선 나의 근로계약서가 제대로 된 계약서인지 검토해 봐야 해요\n근로 계약서에 유의깊게 봐야할 항목 확인!",
  },
  {
    number: "2",
    title: "내 근로 정리",
    description:
      "지피지기 백전백승!\n우선 나의 근로계약서가 제대로 된 계약서인지 검토해 봐야 해요.",
  },
  {
    number: "3",
    title: "네편 현답",
    description:
      "지피지기 백전백승!\n우선 나의 근로계약서가 제대로 된 계약서인지 검토해 봐야 해요.",
  },
];

const MainPage = () => {
  return (
    <div className="main-wrapper">
      <Header />
      {mainFields.map((item, index) => (
        <div key={index} className="box">
          <div className="text-area">
            <div className="number">{item.number}</div>
            <div className="title">{item.title}</div>
            <div className="desc">{item.description}</div>
            <button className="btn">바로가기 →</button>
          </div>
          <div className="image-area" />
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default MainPage;
