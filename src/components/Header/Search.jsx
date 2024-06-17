import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaAirbnb } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import SearchDetail from "./SearchDetail";
import Auth from "./Auth";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--border-gray);
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1650px;
  padding: 1rem 2rem;
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-right: 1rem;
  color: var(--brand-color);
  cursor: pointer;
`;

const BrandIcon = styled(FaAirbnb)`
  font-size: 2rem;
`;

const BrandName = styled.span`
  font-size: 1.4rem;
  margin-left: 0.2rem;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const UserBtn = styled.button`
  font-size: 0.8rem;
  font-weight: bold;
  background-color: transparent;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--hover-bg);
  }
`;

const LanguageIcon = styled(MdLanguage)`
  font-size: 1.2rem;
`;

const Login = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background-color: transparent;
  padding: 0.5rem 0.6rem;
  margin-left: 0.6rem;
  border-radius: 30px;
  border: 1px solid var(--border-gray);
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 4px 4px 18px -9px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 4px 4px 18px -9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 4px 18px -9px rgba(0, 0, 0, 0.75);
  }
`;

const LoginIcon = styled(FaUserCircle)`
  font-size: 1.8rem;
`;

export default function Search() {
  const authRef = useRef(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (authRef.current && !authRef.current.contains(e.target)) {
        setIsLoginOpen(false);
      }
    };
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <Layout>
      <Row>
        <Brand to="/">
          <BrandIcon />
          <BrandName>airbnb</BrandName>
        </Brand>
        <div>
          <SearchDetail />
        </div>
        <User>
          <UserBtn type="button">당신의 공간을 에어비앤비하세요</UserBtn>
          <UserBtn type="button">
            <LanguageIcon />
          </UserBtn>
          <Login ref={authRef} onClick={() => setIsLoginOpen((prev) => !prev)}>
            <GiHamburgerMenu />
            <LoginIcon />
            {isLoginOpen && <Auth />}
          </Login>
        </User>
      </Row>
    </Layout>
  );
}
