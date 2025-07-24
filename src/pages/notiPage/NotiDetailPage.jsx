import React from "react";
import { useParams } from "react-router-dom";
import { notis } from "../../notiData"; // notiData.js에서 notis를 가져온다고 가정

const NotiDetailPage = () => {
  const { id } = useParams();
  const noti = notis.find((item) => item.id === id);

  if (!noti) return <div>공지사항을 찾을 수 없습니다.</div>;
  return (
    <div>
      <h1>{noti.title}</h1>
      <p>{noti.content}</p>
      <p>{noti.date}</p>
    </div>
  );
};

export default NotiDetailPage;
