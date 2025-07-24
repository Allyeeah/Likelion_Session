import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../askpost.scss";

const PostContainer = ({}) => {
  const navigate = useNavigate();
  const handleClick = (post) => {
    console.log(post);
    localStorage.setItem("postId", post.id);
    navigate(`/detail`);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://43.202.217.156:8080/api/posting/list/1"
        );
        console.log(response);
        setPostList(response.data.data);
      } catch (error) {
        console.log("에러");
      }
    };
    fetchPosts();
  }, []);

  const [postList, setPostList] = useState([
    // {
    //   title: "계약서 쓴 날짜 보다 미리 와서 2시간 있다갔어요.",
    //   content:
    //     "물류센터 아르바이트 하고 있는데 5월1일 근로자임박 하나 5월6일 대체 공휴일 같은 날은 주휴수당이 해당 되나요? 참고로 저는 다 하나다 변경형태들은 어떻게 되는지 궁금 합니다.",
    //   date: "2024.04.11",
    // },
    // {
    //   title: "공휴일 일반 대타해도 휴일근로수당 발생하나요?",
    //   content:
    //     "이번 15일 부처님 오신 날에 일반 대타 해주기로 했는데 이럴 경우 휴일근로수당이 발생할까요?",
    //   date: "2024.04.10",
    // },
    // {
    //   title: "퇴직금 이래도 받을 수 있나요?",
    //   content:
    //     "알바하는 곳에서 1년 넘게 일했는데 시급을 올려주지 않아 퇴사했습니다. 근데 사장님이 퇴직금을 안 주시네요. 이거 어떻게 해야하나요?",
    //   date: "2024.04.09",
    // },
    // {
    //   title: "퇴사시 문제가 생길까요? (매장관리)",
    //   content:
    //     "저는 지금 현재 1년 계약직으로 일하고 있습니다. 일할 때 계약 만 되서 일하다가 대리고 산책 인정되고 한 달을 쉬고 일을 무급 복직을 했었습니다. 근데 그 당시 문제가 후계 써야 한다고 이야기도 안 했고... 두 달 쉬고 복귀하고도 관리자가 많이 없었고 관리자가 싹 바뀌었습니다... 이후 바...",
    //   date: "2024.03.11",
    // },
    // {
    //   title: "단기알바 부당해고로 신고 가능한지 궁금합니다",
    //   content:
    //     "물류센터 아르바이트 하고 있는데 5월1일 근로자임박 하나 5월6일 대체 공휴일 같은 날은 주휴수당이 해당 되나요?...",
    //   date: "2024.02.11",
    // },
  ]);
  return (
    <div>
      {postList.map((post, idx) => (
        <div className="simple-post-card" key={idx}>
          <div className="post-header">
            <span className="q-icon">Q.</span>
            <span className="post-title">{post.title}</span>
          </div>
          <div className="post-content">{post.content}</div>
          <div className="post-footer">
            <span className="post-date">{post.date}</span>
            <button
              className="post-detail-btn"
              onClick={() => handleClick(post)}
            >
              자세히 보기 <span style={{ fontWeight: "bold" }}>→</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostContainer;
