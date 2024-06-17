import React, { useState } from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 250px;
  height: 50px;
  border: ${(props) =>
    props.$isClicked ? "2px solid #000000" : "1px solid var(--font-lightgray)"};
  border-radius: 0.4rem;
  padding: 0.4rem;
`;

const Title = styled.p`
  font-size: 0.7rem;
  color: var(--font-lightgray);
`;

export default function PriceInput({ title, price }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Layout
      onClick={() => setIsClicked(true)}
      onBlur={() => setIsClicked(false)}
      $isClicked={isClicked}
      tabIndex="0"
    >
      <Title>{title}</Title>
      <p>₩ {price}원</p>
    </Layout>
  );
}
