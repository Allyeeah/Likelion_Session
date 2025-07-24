import React from "react";
import "../noti.scss";
import { useNavigate } from "react-router-dom";
const NotiItem = ({ noti }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`notidetail/${noti.id}`);
    // 여기서 noti.id를 사용하여 상세 페이지로 이동
  };
  return (
    <div>
      <div className="noti-item">
        <p>{noti.number}</p>
        <p className="noti-title" onClick={handleClick}>
          {noti.title}
        </p>
        <p>{noti.date}</p>
      </div>
    </div>
  );
};

export default NotiItem;
