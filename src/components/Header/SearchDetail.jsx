import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import Destination from "./Destination";
import Calendar from "../../common/Calendar";
import Traveler from "../../common/Traveler";
import { FilterContext } from "../../contexts/FilterContext";

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 520px;
  border-radius: 50px;
  border: 1px solid rgba(235, 235, 235, 1);
  box-shadow: 3px 3px 11px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 3px 11px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 11px -7px rgba(0, 0, 0, 0.75);
`;

const BtnInfo = styled.button`
  background-color: transparent;
  border-radius: 30px;
  border: none;
  text-align: left;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: var(--hover-bg);
  }
`;

const BtnTitle = styled.p`
  font-size: 0.7rem;
  font-weight: bold;
`;

const BtnDetail = styled.p`
  font-size: 0.8rem;
  color: var(--font-lightgray);
  margin-top: 0.1rem;
`;

const InputDestination = styled.input`
  width: 100px;
  border: none;
  margin-top: 0.3rem;
  outline: none;
  font-size: 0.8rem;
  background-color: transparent;
`;

const Search = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  outline: none;
  border: none;
  background-color: var(--brand-color);
  margin-right: 0.5rem;
  cursor: pointer;
`;

const SearchIcon = styled(FaSearch)`
  color: #ffffff;
`;

const DetailPopup = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
  top: 120%;
  padding: 0 2rem 2rem 2rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 0.75);
`;

export default function SearchDetail() {
  const { handleData } = useContext(FilterContext);
  const popupRef = useRef(null);
  const [detailPopup, setDetailPopup] = useState("");
  const [selectedInfo, setSelectedInfo] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    traveler: 0,
    travelerDetail: {
      adult: 0,
      child: 0,
      baby: 0,
    },
  });

  // 선택한 팝업
  const handleDetail = (e) => {
    const name = e.currentTarget.name;
    name === detailPopup ? setDetailPopup("") : setDetailPopup(name);
  };

  // 여행지 (직접 입력)
  const handleDestinationChange = (e) => {
    setSelectedInfo({ ...selectedInfo, destination: e.target.value });
  };

  // 여행지 (팝업 선택)
  const handleDestinationSelected = (e, city) => {
    e.stopPropagation();
    setSelectedInfo({ ...selectedInfo, destination: city });
    setDetailPopup("checkIn");
  };

  // 체크인
  const handleCheckInSelected = (checkIn) => {
    setSelectedInfo({ ...selectedInfo, checkIn });
    setDetailPopup("checkOut");
  };

  // 체크아웃
  const handleCheckOutSelected = (checkOut) => {
    setSelectedInfo({ ...selectedInfo, checkOut });
    setDetailPopup("traveler");
  };

  // 여행자
  const handleTravelerSelected = (type, operator) => {
    setSelectedInfo({
      ...selectedInfo,
      traveler: operator === "plus" ? selectedInfo.traveler + 1 : selectedInfo.traveler - 1,
      travelerDetail: {
        ...selectedInfo.travelerDetail,
        [type]:
          operator === "plus"
            ? selectedInfo.travelerDetail[type] + 1
            : selectedInfo.travelerDetail[type] - 1,
      },
    });
  };

  // 검색
  const handleSubmit = (e) => {
    e.preventDefault();
    handleData(selectedInfo);
    setDetailPopup("");
  };

  useEffect(() => {
    // 모달 바깥쪽 클릭
    const handleClickOutSide = (e) => {
      const isOutSideClicked = !popupRef.current.contains(e.target);
      if (popupRef.current && detailPopup && isOutSideClicked) setDetailPopup("");
    };

    // 스크롤 시 모달 닫기
    const handleScroll = () => {
      setDetailPopup("");
    };

    document.addEventListener("click", handleClickOutSide);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [detailPopup]);

  return (
    <Form onSubmit={handleSubmit} ref={popupRef}>
      <BtnInfo type="button" name="destination" onClick={handleDetail}>
        <BtnTitle>여행지</BtnTitle>
        <InputDestination
          type="text"
          value={selectedInfo.destination}
          onChange={handleDestinationChange}
          placeholder="여행지 검색"
        />
      </BtnInfo>
      <BtnInfo type="button" name="checkIn" onClick={handleDetail}>
        <BtnTitle>체크인</BtnTitle>
        <BtnDetail>{selectedInfo.checkIn || "날짜 추가"}</BtnDetail>
      </BtnInfo>
      <BtnInfo type="button" name="checkOut" onClick={handleDetail}>
        <BtnTitle>체크아웃</BtnTitle>
        <BtnDetail>{selectedInfo.checkOut || "날짜 추가"}</BtnDetail>
      </BtnInfo>
      <BtnInfo type="button" name="traveler" onClick={handleDetail}>
        <BtnTitle>여행자</BtnTitle>
        <BtnDetail>
          {selectedInfo.traveler !== 0 ? `게스트 ${selectedInfo.traveler}명` : "게스트 추가"}
        </BtnDetail>
      </BtnInfo>
      <Search>
        <SearchIcon />
      </Search>

      {detailPopup && (
        <DetailPopup>
          {detailPopup === "destination" ? (
            <Destination handleDestination={handleDestinationSelected} />
          ) : detailPopup === "checkIn" ? (
            <Calendar handleDate={handleCheckInSelected} title="체크인" />
          ) : detailPopup === "checkOut" ? (
            <Calendar handleDate={handleCheckOutSelected} title="체크아웃" />
          ) : (
            <Traveler
              handleTraveler={handleTravelerSelected}
              travelerDetail={selectedInfo.travelerDetail}
            />
          )}
        </DetailPopup>
      )}
    </Form>
  );
}
