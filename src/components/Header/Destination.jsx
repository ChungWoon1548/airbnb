import React from "react";
import styled from "styled-components";
import { v4 as uuid4 } from "uuid";
import Button from "../../common/Button";

const Title = styled.h5`
  font-size: 0.8rem;
  margin-top: 3rem;
`;

const Regions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const RegionImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 1rem;
  border: 1px solid var(--font-lightgray);
  cursor: pointer;
  &:hover {
    border: 1px solid #000000;
  }
`;

const RegionInfo = styled.p`
  font-size: 0.8rem;
  text-indent: 0.2rem;
`;

const CityInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  width: 100%;
  margin-top: 1.5rem;
`;

export default function Destination({ handleDestination }) {
  return (
    <>
      <Title>지역으로 검색하기</Title>
      <Regions>
        {regions.map((region) => (
          <div key={uuid4()}>
            <RegionImg src={region.url} alt={region.info} />
            <RegionInfo>{region.info}</RegionInfo>
          </div>
        ))}
      </Regions>
      <Title>한국</Title>
      <CityInfo>
        {cities.map((city) => (
          <Button key={uuid4()} text={city} handleClick={handleDestination} />
        ))}
      </CityInfo>
    </>
  );
}

const regions = [
  {
    url: "https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg",
    info: "유연한 검색",
  },
  {
    url: "https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320",
    info: "유럽",
  },
  {
    url: "https://a0.muscache.com/im/pictures/26891a81-b9db-4a9c-8aab-63486b7e627c.jpg?im_w=320",
    info: "일본",
  },
  {
    url: "https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320",
    info: "동남아시아",
  },
];

const cities = [
  "서울",
  "부산",
  "속초",
  "강릉",
  "전주",
  "대구",
  "경주",
  "여수",
  "대전",
  "제주도",
  "인천",
];
