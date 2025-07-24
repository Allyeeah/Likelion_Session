import React from "react";
import axios from "axios";
import AskContainer from "./components/AskContainer";
import PostContainer from "./components/PostContainer";
import { useEffect } from "react";
import "./ask.scss";
const AskPage = () => {
  return (
    <div>
      <div className="tab-container">
        <button className="tab-btn active">네편 답변</button>
        <button className="tab-btn">네편 정보</button>
      </div>

      <h2>인기게시글</h2>
      <AskContainer />
      <div className="postbtn-wrapper">
        <button className="postbtn">게시글 작성</button>
      </div>
      <h2>게시글</h2>
      <PostContainer />
    </div>
  );
};

export default AskPage;
