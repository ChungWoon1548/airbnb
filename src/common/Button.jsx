import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 0.5rem 0;
  border: 1px solid var(--font-lightgray);
  border-radius: 30px;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export default function Button({ text, handleClick }) {
  return <Btn onClick={(e) => handleClick(e, text)}>{text}</Btn>;
}
