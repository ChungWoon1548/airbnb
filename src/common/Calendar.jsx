import moment from "moment";
import React, { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import "./calendar.css";

const Title = styled.h5`
  font-size: 0.8rem;
  margin: 3rem 0 1.5rem 0;
`;

export default function Calender({ handleDate, title }) {
  const [value, setValue] = useState(new Date());

  const handleDateChange = (date) => {
    setValue(date);
    handleDate(moment(date).format("M월 D일"));
  };

  return (
    <>
      <Title>{title}</Title>
      <Calendar
        value={value}
        onChange={handleDateChange}
        calendarType="gregory"
        formatDay={(_, date) => moment(date).format("D")}
      ></Calendar>
    </>
  );
}
