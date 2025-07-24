import React, { useEffect, useState } from "react";
import OptionBox from "./components/OptionBox";
import ResultUploader from "./components/ResultUploader";
import "./post.scss";
import axios from "axios";

const PostPage = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const handleSubmit = async () => {
    try {
      //백엔드가 원하는 데이터 형식
      const data = {
        user_id: 1,
        worksheet_id: 1,
        title: "게시물 제목",
        content: "게시판 선택",
        type: 1,
      };

      const response = await axios.post(
        "http://43.202.217.156:8080/api/posting",
        data
      ); // post는 인자 2개
      console.log(response);
    } catch (error) {}
  };
  return (
    <div className="post-page-wrapper">
      <h2 className="title">게시물 제목</h2>
      <input className="inputbox" placeholder="질문 제목을 입력하세요." />
      <h2 className="section-title">게시판 선택</h2>
      <OptionBox />
      <h2 className="section-title">게시글 내용</h2>
      <textarea className="inputbox" placeholder="질문 내용을 입력하세요." />
      <h2 className="section-title">내 결과지 가져오기(선택)</h2>
      <ResultUploader />
      <div className="register-btn-wrapper">
        <button className="register-btn" onClick={handleSubmit}>
          등록하기
        </button>
      </div>
    </div>
  );
};

export default PostPage;
