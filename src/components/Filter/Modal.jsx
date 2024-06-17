import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import { IoIosClose } from "react-icons/io";
import PriceInput from "./PriceInput";
import { v4 as uuid4 } from "uuid";
import { FilterContext } from "../../contexts/FilterContext";

const CommonPortalStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PortalBackdrop = styled.div`
  ${CommonPortalStyle}
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.5;
  z-index: 1000;
`;

const PortalOverlay = styled.form`
  ${CommonPortalStyle}
  width: 700px;
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  background-color: #ffffff;
  border-radius: 1rem;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid var(--border-gray);
  padding: 1.2rem;
`;

const CloseBtn = styled(IoIosClose)`
  position: absolute;
  left: 15px;
  font-size: 1.7rem;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1.2rem;
`;

const SubTitle = styled.h3`
  margin-bottom: 1rem;
`;

const SubInfo = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

const Section = styled.div`
  border-bottom: 1px solid var(--font-lightgray);
  padding: 1.5rem 0;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const RoomTypeBtns = styled.div`
  width: 580px;
  border: 1px solid var(--font-lightgray);
  border-radius: 1rem;
  overflow: hidden;
`;

const RoomTypeBtn = styled.button`
  width: calc(100% / 3);
  height: 65px;
  border: none;
  border-right: ${(props) => (props.$border ? "1px solid var(--font-lightgray)" : "none")};
  border-left: ${(props) => (props.$border ? "1px solid var(--font-lightgray)" : "none")};
  border-top-left-radius: ${(props) => props.$radiusL && "1rem"};
  border-bottom-left-radius: ${(props) => props.$radiusL && "1rem"};
  border-top-right-radius: ${(props) => props.$radiusR && "1rem"};
  border-bottom-right-radius: ${(props) => props.$radiusR && "1rem"};
  outline: none;
  padding: 1.3rem;
  font-weight: bold;
  &:hover {
    border: 1px solid black;
  }
  ${(props) => {
    switch (props.$all) {
      case "all":
        return css`
          background-color: rgba(0, 0, 0, 0.8);
          color: #ffffff;
        `;
      default:
        return css`
          background-color: transparent;
        `;
    }
  }}
  cursor: pointer;
`;

const PriceGraphWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 580px;
  height: 65px;
  border-bottom: 1px solid #000000;
`;

const Bar = styled.div`
  width: 10px;
  background-color: #000000;
  display: inline-block;
  margin: 0.1rem;
`;

const InputRange = styled.input`
  position: absolute;
  bottom: -13px;
  width: 95%;
  cursor: pointer;
  ${(props) => {
    switch (props.$position) {
      case "start":
        return css`
          left: 0;
        `;
      case "end":
        return css`
          right: 0;
        `;
    }
  }}
`;

const PriceTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 580px;
  margin-top: 3rem;
`;

const Search = styled.button`
  position: absolute;
  right: 30px;
  bottom: 30px;
  border: none;
  border-radius: 10px;
  padding: 0.8rem 1.2rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
`;

const Backdrop = ({ modalHandler }) => {
  return <PortalBackdrop onClick={() => modalHandler(false)}></PortalBackdrop>;
};

const Overlay = ({ modalHandler }) => {
  const [roomType, setRoomType] = useState("all");
  const { handlePrice } = useContext(FilterContext);
  const [price, setPrice] = useState({
    start: 0,
    end: 360000,
  });

  const handleRangeChange = (e, position) => {
    const value = e.target.value;
    if (position === "start") {
      setPrice({ ...price, start: +value });
    } else {
      setPrice({ ...price, end: +value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePrice(price);
    modalHandler(false);
  };

  return (
    <PortalOverlay onSubmit={handleSubmit}>
      <Header>
        <CloseBtn onClick={() => modalHandler(false)} />
        <Title>필터</Title>
      </Header>
      <Body>
        <Section>
          <SubTitle>숙소 유형</SubTitle>
          <SubInfo>방, 집 전체 등 원하는 숙소 유형을 검색해 보세요.</SubInfo>
          <SectionWrapper>
            <RoomTypeBtns>
              <RoomTypeBtn type="button" $all={roomType} $radiusL={true}>
                모든 유형
              </RoomTypeBtn>
              <RoomTypeBtn type="button" $border>
                방
              </RoomTypeBtn>
              <RoomTypeBtn type="button" $radiusR={true}>
                집 전체
              </RoomTypeBtn>
            </RoomTypeBtns>
          </SectionWrapper>
        </Section>
        <Section>
          <SubTitle>가격 범위</SubTitle>
          <SubInfo>1박 요금(수수료 및 세금 포함)</SubInfo>
          <SectionWrapper>
            <PriceGraphWrapper>
              {bars.map((bar) => (
                <Bar key={uuid4()} style={{ height: bar }}></Bar>
              ))}
              <InputRange
                type="range"
                min="0"
                max="360000"
                value={price.start}
                onChange={(e) => handleRangeChange(e, "start")}
                $position="start"
              />
              <InputRange
                type="range"
                min="0"
                max="360000"
                value={price.end}
                onChange={(e) => handleRangeChange(e, "end")}
                $position="end"
              />
            </PriceGraphWrapper>
            <PriceTextWrapper>
              <PriceInput title="최저" price={price.start} />
              &mdash;
              <PriceInput title="최고" price={price.end} />
            </PriceTextWrapper>
          </SectionWrapper>
        </Section>
      </Body>
      <Search type="submit">숙소 모두 보기</Search>
    </PortalOverlay>
  );
};

export default function Modal({ modalHandler }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop modalHandler={modalHandler} />,
        document.getElementById("backdrop")
      )}

      {ReactDOM.createPortal(
        <Overlay modalHandler={modalHandler} />,
        document.getElementById("overlay")
      )}
    </>
  );
}

const bars = [
  0, 0, 0, 10, 30, 30, 30, 45, 20, 5, 20, 20, 20, 30, 30, 56, 80, 70, 70, 80, 74, 55, 67, 70, 80,
  70, 50, 69, 74, 80, 50, 50, 70, 40, 20, 20, 20, 10, 10, 32, 19, 15, 4, 7, 0,
];
