import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { PiDoorOpen } from "react-icons/pi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { LuBedDouble } from "react-icons/lu";
import { TbToolsKitchen2 } from "react-icons/tb";
import { PiCar } from "react-icons/pi";
import { FiWifi } from "react-icons/fi";
import { GiWashingMachine } from "react-icons/gi";
import { FaRegSnowflake } from "react-icons/fa";
import { RiFridgeLine } from "react-icons/ri";
import { PiTelevisionSimple } from "react-icons/pi";

const Article = styled.article`
  margin-bottom: 20px;
  text-align: left;
  margin-left: 15%;
  margin-right: 15%;
`;

const DetailIntro = styled.div`
  p {
    margin-bottom: 10px;
  }
`;

const StyledFaStar = styled(FaStar)`
  margin-right: 5px;
`;

const HostInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin-right: 20px;
  }
`;

const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e1e1e1;

  div {
    margin-right: 20px;
    margin-bottom: 20px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledPiDoorOpen = styled(PiDoorOpen)`
  margin-right: 20px;
  width: 30px;
  height: 30px;
`;

const StyledLiaSwimmingPoolSolid = styled(LiaSwimmingPoolSolid)`
  margin-right: 20px;
  width: 30px;
  height: 30px;
`;

const Translation = styled.div`
  width: 100%;
  max-width: 70vh;
  height: 50px;
  background-color: #f7f7f7;
  padding: 10px 15px;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 30px;

  a {
    text-decoration: underline;
    color: black;
    font-weight: bolder;
  }
`;

const MoreInfo = styled.div`
  width: 89vh;

  p {
    white-space: pre-line;
    margin-bottom: 15px;
  }
  a {
    text-decoration: underline;
    color: black;
    font-weight: bolder;
  }
`;

const StyledLuBedDouble = styled(LuBedDouble)`
  width: 30px;
  height: 30px;
`;

const AccommodationDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
`;

const Amenities = styled.div`
  margin-top: 40px;
`;

const AmenityList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 20px;
`;

const AmenityItem = styled.div`
  display: flex;
  align-items: left;
`;

const StyledTbToolsKitchen2 = styled(TbToolsKitchen2)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const StyledFiWifi = styled(FiWifi)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const StyledPiCar = styled(PiCar)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const StyledFaRegSnowflake = styled(FaRegSnowflake)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const StyledGiWashingMachine = styled(GiWashingMachine)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const StyledRiFridgeLine = styled(RiFridgeLine)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const StyledPiTelevisionSimple = styled(PiTelevisionSimple)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const AmenityBtn = styled.button`
  padding: 15px 25px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: white;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  margin-top: 40px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function DetailMain({ data }) {
  return (
    <Article>
      <DetailIntro>
        <h2>{data.name}</h2>
        <p>최대 인원 3명. 침실 1개. 침대 1개. 욕실 1개</p>
        <p>
          <StyledFaStar />
          4.85{" "}
          <a
            href=""
            style={{
              textDecoration: "underline",
              color: "black",
              fontWeight: "bolder",
            }}
          >
            후기 78개
          </a>
        </p>
      </DetailIntro>

      <HostInfo>
        <img src="https://reactjs.org/logo-og.png" alt="host" />
        <div>
          <p style={{ fontWeight: "bold" }}>호스트: Angela 님</p>
          <p style={{ fontSize: "smaller", color: "#ad9987" }}>
            호스팅 경력 5년
          </p>
        </div>
      </HostInfo>

      <RoomInfo>
        <IconWrapper>
          <StyledPiDoorOpen />
          <div>
            <p>셀프 체크인</p>
            <p>건물 직원의 도움을 받아 체크인하실 수 있습니다.</p>
          </div>
        </IconWrapper>

        <IconWrapper>
          <StyledLiaSwimmingPoolSolid />
          <div>
            <p>마음껏 물놀이를 즐기세요</p>
            <p>해당 지역에서 수영장을 갖춘 몇 안 되는 숙소 중 하나입니다.</p>
          </div>
        </IconWrapper>
      </RoomInfo>

      <Translation>
        <div>
          <p>
            일부 정보는 자동 번역되었습니다. <a href="">원문 보기</a>
          </p>
        </div>
      </Translation>

      <MoreInfo>
        <div>
          <p>
            기차역에 쉽게 접근할 수 있는 최신식 쇼핑 센터 바로 옆에 위치해
            있으며, 타운의 대부분의 관광지와 숨겨진 보석을 여행할 수 있습니다.
            KL 게이트웨이 프리미엄 레지던스는 헬스장, 인피니티 수영장, 어린이
            수영장, 스카이 데크 및 오픈 선데크 등 다양한 엔터테인먼트 시설을
            갖추고 있어 게스트가 건물을 빠져나가지 않고 휴가를 즐길 수 있습니다.
          </p>
        </div>
        <a href="">더 보기</a>
      </MoreInfo>

      <AccommodationDetail>
        <h2>숙박 장소</h2>
        <div
          style={{
            width: "200px",
            height: "160px",
            border: "1px solid #e1e1e1",
            borderRadius: "10px",
            display: "flex",
            alignItems: "left",
            flexDirection: "column",
            justifyContent: "space-around",
            padding: "20px",
            marginBottom: "30px",
            marginTop: "30px",
          }}
        >
          <StyledLuBedDouble />
          <p>침실</p>
          <p>퀸사이즈 침대 1개</p>
        </div>
      </AccommodationDetail>

      <Amenities>
        <h2>숙소 편의시설</h2>
        <AmenityList>
          <AmenityItem>
            <StyledTbToolsKitchen2 />
            <p>주방</p>
          </AmenityItem>
          <AmenityItem>
            <StyledFiWifi />
            <p>무선인터넷</p>
          </AmenityItem>
          <AmenityItem>
            <StyledPiCar />
            <p>건물 내 무료 주차- 1대 주차 가능</p>
          </AmenityItem>
          <AmenityItem>
            <StyledFaRegSnowflake />
            <p>에어컨</p>
          </AmenityItem>
          <AmenityItem>
            <StyledLiaSwimmingPoolSolid />
            <p>수영장</p>
          </AmenityItem>
          <AmenityItem>
            <StyledGiWashingMachine />
            <p>세탁기</p>
          </AmenityItem>
          <AmenityItem>
            <StyledRiFridgeLine />
            <p>냉장고</p>
          </AmenityItem>
          <AmenityItem>
            <StyledPiTelevisionSimple />
            <p>TV</p>
          </AmenityItem>
        </AmenityList>
      </Amenities>
      <AmenityBtn>편의시설 40개 모두 보기</AmenityBtn>
    </Article>
  );
}
