import React, { useEffect } from "react";
import "./detail.scss";
import ButtonContainer from "./components/ButtonContainer";
import PostWriteForm from "./components/PostWriteForm";
import { useState } from "react";
import axios from "axios";
const DetailPage = () => {
  const [post, setPost] = useState({}); // get로 받아온 특정 게시물

  useEffect(() => {
    const postId = localStorage.getItem("postId"); //localstorage에 저장된거 가져와서 함
    console.log(postId);
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://43.202.217.156:8080/api/posting/${postId}`
        );
        setPost(response.data.data);
        console.log(response.data.data);
      } catch (error) {}
    };
    console.log(post);

    fetchPosts();
  }, []);

  const username = post.nickname;
  const content = post.content;
  const created = post.created_at;
  const bookmarked = post.is_bookmarked;
  const title = post.title;
  const wooksheet = post.worksheet_id;
  return (
    <div className="detail-box">
      <div className="white-box">
        <div className="question-row">
          <span className="q-icon">Q. </span>
          <h2 className="question-title">{title}</h2>
        </div>

        <strong>
          <div>{username}</div>
        </strong>
        <div className="date">{created}</div>
        <div>{content}</div>

        <h2>근무지 이름 근로 결과지</h2>
        <p>
          상시 5인 이상 사업장에서 근무하시므로 추가적인 가산 수당이 발생합니다
        </p>
        <p>주 근로 시간이 14 시간이므로 주휴수당이 발생하지 않습니다</p>
        <p>
          한 주 동안 야근 근로시간이 0시간이므로 야간근로수당 0원이 발생합니다.
        </p>
        <p>
          한 주 동안 연장 근로시간이 0시간이므로 연장근로수당 0원이 발생합니다.
        </p>
        <p>
          취업 규칙 등에서 정한 약정 휴일에 0시간 근무하므로 휴일근로수당 0원이
          발생합니다.
        </p>
        <strong>
          <p>따라서, 코카콜라님의 월급은 800,000원 입니다.</p>
        </strong>

        <h2 className="factors">발생 요건들</h2>
        <ButtonContainer />
      </div>
      {/*white-box닫는 div */}
      <PostWriteForm />
    </div>
  );
};

export default DetailPage;
