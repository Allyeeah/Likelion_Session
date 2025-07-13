import React from "react";
import NotiContainer from "./components/NotiContainer";
import "./noti.scss";
const NotiPage = () => {
  return (
    <div>
      <h2 className="title">공지사항</h2>
      <NotiContainer />
    </div>
  );
};

export default NotiPage;
