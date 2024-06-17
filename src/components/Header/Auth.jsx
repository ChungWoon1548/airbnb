import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  top: 120%;
  right: 0;
  width: 220px;
  border-radius: 0.5rem;
  background-color: #ffffff;
  text-align: left;
  padding: 0.5rem 0;
  overflow: hidden;
  box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 0.75);
`;

const UserUtils = styled.div`
  width: 100%;
  padding: 0.7rem 0.5rem;
  transition: all 0.3s;
  font-size: 0.8rem;
  &:hover {
    background-color: var(--border-gray);
  }
`;

const Login = styled(UserUtils)`
  font-weight: bold;
`;

const Hr = styled.hr`
  color: var(--border-gray);
`;

export default function Auth() {
  return (
    <Layout>
      <Login>로그인</Login>
      <UserUtils>회원 가입</UserUtils>
      <Hr />
      <UserUtils>당신의 공간을 에어비앤비하세요</UserUtils>
      <UserUtils>도움말 센터</UserUtils>
    </Layout>
  );
}
