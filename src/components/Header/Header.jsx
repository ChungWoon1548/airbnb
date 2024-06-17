import React from "react";
import styled from "styled-components";
import Search from "./Search";

const Layout = styled.header`
  position: fixed;
  width: 100%;
  z-index: 1000;
  background-color: #ffffff;
`;

export default function Header() {
  return (
    <Layout>
      <Search />
    </Layout>
  );
}
