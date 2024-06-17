import React from "react";
import styled from "styled-components";
import { v4 as uuid4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./imgCardSwiper.css";

SwiperCore.use([Navigation, Pagination]);

const Layout = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 220px;
  border-radius: 1rem;
  overflow: hidden;
  margin-top: 1rem;
`;

const SwiperContainer = styled(Swiper)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export default function ImgCard({ urls }) {
  const handleClick = (e) => {
    e.stopPropagation();
  };
  return (
    <Layout onClick={handleClick}>
      <SwiperContainer slidesPerView={1} navigation pagination={{ clickable: true }}>
        {urls.map((url) => (
          <SwiperSlide key={uuid4()}>
            <Img src={url} alt="" />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </Layout>
  );
}
