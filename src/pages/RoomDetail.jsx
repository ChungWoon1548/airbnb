import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Reservation from "../components/RoomDetail/Reservation";
import ImgRoomDetail from "../components/RoomDetail/ImgRoomDetail";
import CalendarOnPage from "../components/RoomDetail/CalendarOnPage";
import Map from "../components/Detail/Map";
import DetailMain from "../components/Detail/DetailMain";

const Layout = styled.div`
  margin-top: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WrapperLayout = styled.div`
  width: 100%;
  max-width: 1150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
`;

const MainLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CalendarWrapper = styled.div`
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 25px;
  margin: 25px 0 30px 0;
`;

const ReservationStyle = styled.div`
  position: sticky;
  top: 70px;
  margin-bottom: auto;
`;

const BottomBorder = styled.div`
  height: 15px
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 100px;
`;

export default function RoomDetail() {
  const location = useLocation();
  const data = location.state?.data;

  //test
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 선택한 날짜를 업데이트하는 함수
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(selectedDate);
  };

  return (
    <Layout>
      <WrapperLayout>
        <div>
          <ImgRoomDetail urls={data.img_path} />
        </div>
        <MainLayout>
          <LeftWrapper>
            <DetailMain data={data} />
            <CalendarWrapper>
              <CalendarOnPage
                selectedDate={selectedDate}
                onDateChange={handleDateChange}
              />
            </CalendarWrapper>
          </LeftWrapper>
          <ReservationStyle>
            <Reservation
              data={data}
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
            />
          </ReservationStyle>
        </MainLayout>
        <Map />
        <BottomBorder></BottomBorder>
      </WrapperLayout>
    </Layout>
  );
}
