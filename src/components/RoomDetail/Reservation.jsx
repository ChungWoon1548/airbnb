import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import Calender from "../../common/Calendar";
import Traveler from "../../common/Traveler";

const Reservation = ({ data, selectedDate, onDateChange }) => {
  const popupRef = useRef(null);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [detailPopup, setDetailPopup] = useState("");
  const [selectedInfo, setSelectedInfo] = useState({
    checkIn: "",
    checkOut: "",
    traveler: 0,
    travelerDetail: {
      adult: 0,
      child: 0,
      baby: 0,
    },
  });

  const handleDetail = (e) => {
    const name = e.currentTarget.name;
    name === detailPopup ? setDetailPopup("") : setDetailPopup(name);
  };

  //체크인
  const handleCheckInSelected = (checkIn) => {
    setSelectedInfo({ ...selectedInfo, checkIn });
    setDetailPopup("checkOut");
    setCheckInDate(checkIn);
  };

  //체크아웃
  const handleCheckOutSelected = (checkOut) => {
    setSelectedInfo({ ...selectedInfo, checkOut });
    setCheckOutDate(checkOut);
  };

  //디폴트 체크인 날짜
  function getToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1 해주고, 2자리로 만듭니다.
    const day = String(today.getDate()).padStart(2, "0"); // 일도 2자리로 만듭니다.
    return `${year}.${month}.${day}`;
  }

  // 디폴트 체크아웃 날짜
  function getTodayPlus5Days() {
    const today = new Date();
    today.setDate(today.getDate() + 5); // 현재 날짜에 5일을 더합니다.

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  }

  // 몇박인지 계산
  // 날짜 문자열을 Date 객체로 변환하는 함수
  function parseDateString(dateStr) {
    // '월'과 '일'을 공백으로 대체하여 표준 형식으로 변환
    const formattedDateStr = dateStr.replace("월", "").replace("일", "");
    // 형식 변환된 문자열을 Date 객체로 변환하여 반환
    return new Date(formattedDateStr);
  }

  // 날짜 문자열
  const checkInDateStr = checkInDate;
  const checkOutDateStr = checkOutDate;

  // 날짜 문자열을 Date 객체로 변환
  const checkInDateFormat = parseDateString(checkInDateStr);
  const checkOutDateFormat = parseDateString(checkOutDateStr);

  // 변환된 Date 객체를 통해 날짜 차이 계산
  const timeDifferenceMs = checkOutDateFormat - checkInDateFormat;
  const timeDifferenceDays = Math.ceil(
    timeDifferenceMs / (1000 * 60 * 60 * 24)
  );

  //숙박기간 계산함수 - 디폴드값 포함
  const stayNights = () => (selectedInfo.checkOut ? timeDifferenceDays : 5);

  // 여행자
  const handleTravelerSelected = (type, operator) => {
    setSelectedInfo({
      ...selectedInfo,
      traveler:
        operator === "plus"
          ? selectedInfo.traveler + 1
          : selectedInfo.traveler - 1,
      travelerDetail: {
        ...selectedInfo.travelerDetail,
        [type]:
          operator === "plus"
            ? selectedInfo.travelerDetail[type] + 1
            : selectedInfo.travelerDetail[type] - 1,
      },
    });
  };

  // 제출
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    // 모달 바깥쪽 클릭
    const handleClickOutSide = (e) => {
      const isOutSideClicked = !popupRef.current.contains(e.target);
      if (popupRef.current && detailPopup && isOutSideClicked)
        setDetailPopup("");
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
    <BlockControl>
      <div>
        <form onSubmit={handleSubmit} ref={popupRef}>
          <BlockTextContainer1>
            <BlockText1>₩{data.price}</BlockText1>
            <BlockText2> /박</BlockText2>
          </BlockTextContainer1>
          {/* 체크인 체크아웃 */}
          <CheckInOutContainer>
            <BtnInfo type="button" name="checkIn" onClick={handleDetail}>
              <BtnTitle>체크인</BtnTitle>
              <BtnDetail>{selectedInfo.checkIn || getToday()}</BtnDetail>
            </BtnInfo>

            <BtnInfo type="button" name="checkOut" onClick={handleDetail}>
              <BtnTitle>체크아웃</BtnTitle>
              <BtnDetail>
                {selectedInfo.checkOut || getTodayPlus5Days()}
              </BtnDetail>
            </BtnInfo>
          </CheckInOutContainer>
          <DetailPopup detailPopup={detailPopup}>
            {(detailPopup === "checkIn" || detailPopup === "checkOut") && (
              <CalendarContainer>
                <CheckInCalendar>
                  <Calender
                    handleDate={handleCheckInSelected}
                    title="체크인"
                    dateIndex="0"
                    value={selectedDate}
                    onChange={onDateChange}
                  />
                </CheckInCalendar>
                <CheckOutCalendar>
                  <Calender
                    handleDate={handleCheckOutSelected}
                    title="체크아웃"
                    dateIndex="1"
                  />
                </CheckOutCalendar>
              </CalendarContainer>
            )}
          </DetailPopup>

          <div>
            <BtnInfo2 type="button" name="traveler" onClick={handleDetail}>
              <BtnTitle>여행자</BtnTitle>
              <BtnDetail>
                {selectedInfo.traveler !== 0
                  ? `게스트 ${selectedInfo.traveler}명`
                  : "게스트 1명"}
              </BtnDetail>
            </BtnInfo2>
            <TravelerDropdown>
              {detailPopup === "traveler" && (
                <Traveler
                  handleTraveler={handleTravelerSelected}
                  travelerDetail={selectedInfo.travelerDetail}
                />
              )}
            </TravelerDropdown>
          </div>
          {/* <GuestDropdown guestOptions={guestOptions} /> */}
          <Button>예약하기</Button>
        </form>
      </div>
      <TextControl>
        <BlockText3>예약 확정 전에는 요금이 청구되지 않습니다.</BlockText3>
        <BlockText4>
          <span>
            ₩{parseInt(data.price.toString().replace(/,/g, ""), 10)} x{" "}
            {stayNights()}박
          </span>
          <span>
            ₩
            {parseInt(data.price.toString().replace(/,/g, ""), 10) *
              stayNights()}
          </span>
        </BlockText4>

        <BlockText4>
          <span>에어비앤비 서비스 수수료</span>
          <span>
            ₩
            {parseInt(data.price.toString().replace(/,/g, ""), 10) *
              stayNights() *
              0.1}
          </span>
        </BlockText4>
        <Line></Line>
        <BlockText5>
          <span>총 합계</span>
          <span>
            ₩
            {Math.floor(
              parseInt(data.price.toString().replace(/,/g, ""), 10) *
                stayNights() *
                1.1
            )}
          </span>
        </BlockText5>
      </TextControl>
    </BlockControl>
  );
};

export default Reservation;

const BlockControl = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  padding: 24px;
  margin: 0 0 40px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 350px;
  box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 0.75);
`;

const BlockText1 = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: #2c2c2c;
`;

const BlockText2 = styled.span`
  font-size: 16px;
  color: grey;
`;

const CheckInOutContainer = styled.div``;

const CalendarContainer = styled.div`
  display: flex;
  width: 100%;
`;

const CheckInCalendar = styled.div`
  width: 50%;
  padding-right: 15px;
`;

const CheckOutCalendar = styled.div`
  width: 50%;
  padding-left: 15px;
`;

const DetailPopup = styled.div`
  position: absolute;
  border: 1px solid #e8e8e8;
  border-radius: 30px;
  overflow: hidden;
  top: 130px;
  left: 0px;
  padding: ${({ detailPopup }) =>
    detailPopup === "checkIn" || detailPopup === "checkOut" ? "2rem" : "0"};
  background-color: #ffffff;
  box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 0.75);
  opacity: ${({ detailPopup }) => (detailPopup ? 1 : 0)};
`;

const TravelerDropdown = styled.div`
  position: absolute;
  background-color: white;
  width: 300px;
  border-radius: 5px;
  border: ${({ detailPopup }) =>
    detailPopup === "traveler" ? "1px solid #dcdcdc" : "none"};

  padding: 0 15px 0 15px;
  box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 0.75);
`;

const Button = styled.button`
  border-radius: 8px;
  border: none;
  background-color: #da0c64;
  color: white;
  font-weight: bold;
  width: 300px;
  height: 45px;
  margin: 15px 0 15px 0;
  cursor: pointer;
`;

const TextControl = styled.div`
  justify-content: center;
  align-items: center;
  width: 96%;
`;

const BlockText3 = styled.div`
  font-size: 12px;
  color: grey;
  padding: 0 0 15px 0;
`;

const BlockText4 = styled.div`
  font-size: 16px;
  color: grey;
  display: flex;
  justify-content: space-between;
  margin: 10px 0 10px 0;
`;

const BlockText5 = styled.div`
  font-size: 18px;
  color: black;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  padding: 14px 0 0 0;
`;

const BlockTextContainer1 = styled.div`
  margin: 0 0 20px 0;
`;

const BtnInfo = styled.button`
  background-color: white;
  border: 1px solid lightgrey;
  border-bottom: none;
  border-right: ${({ name }) => name === "checkIn" && "none"};
  border-top-left-radius: ${({ name }) => name === "checkIn" && "7px"};
  border-top-right-radius: ${({ name }) => name === "checkOut" && "7px"};
  text-align: left;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  width: 50%;
`;

const BtnInfo2 = styled.button`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 0 0 7px 7px;
  text-align: left;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  width: 100%;
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

const Line = styled.div`
  display: block;
  width: 100%;
  height: 0.01em;
  background-color: var(--font-lightgray);
`;
