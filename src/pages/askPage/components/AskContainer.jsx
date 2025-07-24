import React from "react";
import "../../askPage/ask.scss";
const postList = [
  {
    title: "해당 사안에도 주휴수당이 발생하는지 궁금합니다",
    content:
      "물류센터 아르바이트 하고 있는데 5월부터 근로자입니다 하나 5월에 대해 공제와 같은 날은 주휴수당이 해당 되나요? 참고로 지시는 한 다이나 변형근로형태로 어떻게 되는지 궁금합니다.",
  },
  {
    title: "공휴일 일반 대타해도 휴일근로수당 발생하나요?",
    content:
      "이번 5월 15석과 오신 날에 일반 대타 해주기로 했는데 이럴 경우 휴일근로수당이 발생할까요?",
  },
  {
    title: "퇴사시 문제가 생길까요? (매장관리)",
    content:
      "저는 지금 현재 1년 계약직으로 일하고 있습니다. 일할 때 제 계약 안 되서 일하다가 대리고 산책 인정되고 한 달을 쉬고 일을 무급 복직을 했었습니다. 근데 그 당시 문제가 후계 써야 한다고 이야기도 안 했고...",
  },
];
const AskContainer = () => {
  return (
    <div className="ask-container">
      <div className="popular-posts">
        {postList.map((post, index) => (
          <div key={index} className="post-card">
            <div className="question">
              <span className="q-icon">Q. </span>
              {post.title}
            </div>
            <div className="content">{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AskContainer;
