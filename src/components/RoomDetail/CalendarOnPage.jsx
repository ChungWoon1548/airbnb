import React, { useState } from "react";
import Calender from "../../common/Calendar";
import styled from "styled-components";

const CalendarOnPage = ({ selectedDate, onDateChange }) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  // 체크인
  const handleCheckInSelected = (checkIn) => {
    setCheckInDate(checkIn);
  };

  // 체크아웃
  const handleCheckOutSelected = (checkOut) => {
    setCheckOutDate(checkOut);
  };

  return (
    <>
      <CalendarContainer>
        <CheckInCalendar>
          <Calender
            handleDate={handleCheckInSelected}
            title="체크인"
            selectedDate={checkInDate}
            value={selectedDate}
            onChange={onDateChange}
          />
        </CheckInCalendar>
        <CheckOutCalendar>
          <Calender
            handleDate={handleCheckOutSelected}
            title="체크아웃"
            selectedDate={checkOutDate}
          />
        </CheckOutCalendar>
      </CalendarContainer>
    </>
  );
};

export default CalendarOnPage;

const CalendarContainer = styled.div`
  margin: 20px;
  display: flex;
  width: 80%;
`;

const CheckInCalendar = styled.div`
  width: 50%;
  padding-right: 15px;
`;

const CheckOutCalendar = styled.div`
  width: 50%;
  padding-left: 15px;
`;
