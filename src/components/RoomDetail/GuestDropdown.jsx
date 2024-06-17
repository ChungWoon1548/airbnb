import React, { useState } from "react";
import { styled } from "styled-components";

const GuestDropdown = ({ guestOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((preState) => !preState);

  const renderedOptions = guestOptions.map((option) => {
    return <RenderedGuest key={option.value}>{option.label}</RenderedGuest>;
  });

  return (
    <>
      <DropDownContainer onClick={handleClick}>
        <DropDownText>
          <div>인원</div>
          <div>게스트 1명</div>
        </DropDownText>
        {isOpen && <RenderedGuestContainer>{renderedOptions}</RenderedGuestContainer>}
      </DropDownContainer>
    </>
  );
};

export default GuestDropdown;

const DropDownContainer = styled.div``;

const DropDownText = styled.div`
  font-size: 20px;
  width: 300px;
  height: 50px;
  border: 1px solid #d0d0d0;
  border-radius: 0 0 7px 7px;
  text-align: center;
  font-size: 13px;
  color: #a8a8a8;
  justify-content: start;
  align-items: center;
`;

const RenderedGuestContainer = styled.div`
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #d0d0d0;
  border-radius: 7px;
  width: 300px;
  position: absolute;
`;

const RenderedGuest = styled.div`
  padding: 10px 0 10px 0;
  color: #969696;
  font-weight: bold;
`;
