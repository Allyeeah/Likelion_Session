import React from "react";
import NotiItem from "./NotiItem";
const notis = [
  {
    id: "1",
    number: "주요",
    title: "공지사항 1",
    content: "공지사항 내용 1입니다.",
    date: "2024.05.03",
  },
  {
    id: "2",
    number: "주요",
    title: "공지사항 2",
    content: "공지사항 내용 2입니다.",
    date: "2024.05.4",
  },
  {
    id: "3",
    number: "주요",
    title: "공지사항 3",
    content: "공지사항 내용 3입니다.",
    date: "2024.05.05",
  },
  {
    id: "4",
    number: "주요",
    title: "공지사항 4",
    content: "공지사항 내용 4입니다.",
    date: "2024.05.06",
  },
];

const NotiContainer = () => {
  return (
    <div>
      <div className="noti-container">
        {notis.map((item) => (
          <NotiItem key={item.id} noti={item} />
        ))}
      </div>
    </div>
  );
};

export default NotiContainer;
