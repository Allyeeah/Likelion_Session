import React from "react";
import SignButton from "../signupPage/components/SignButton";
import SignInput from "../signupPage/components/SignInput";
const inputFields = [
  { label: "아이디", plceholder: "아이디를 입력하세요" },
  { label: "비밀번호", placeholder: "비밀번호를 입력하세요" },
];
const LoginPage = () => {
  return (
    <div>
      {inputFields.map((field, index) => (
        <SignInput
          key={index}
          label={field.label}
          placeholder={field.placeholder}
        />
      ))}
      <SignButton title="로그인" />
    </div>
  );
};

export default LoginPage;
