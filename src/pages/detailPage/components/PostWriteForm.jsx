import React, { useState } from "react";
import "../detail.scss";
const PostWriteForm = () => {
  const username = "코카콜라";
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    setContent("");
  };

  return (
    <div>
      <form className="post-write-form" onSubmit={handleSubmit}>
        <div className="username">{username}</div>
        <textarea
          className="inputbox"
          placeholder="답변 내용을 입력하세요."
          value={content}
          onChange={(e) => setContent(e.target.valule)}
          required
        />
        <button className="register-btn" type="submit">
          답변달기
        </button>
      </form>
    </div>
  );
};

export default PostWriteForm;
