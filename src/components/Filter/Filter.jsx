import styled from "styled-components";
import { v4 as uuid4 } from "uuid";
import "./filterSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";
import { RiFilter2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Modal from "./Modal";

SwiperCore.use([Navigation]);

const Layout = styled.div`
  position: fixed;
  top: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  max-width: 1650px;
  padding: 1rem 2rem;
  height: 100px;
  background-color: #ffffff;
  z-index: 100;
  border-top: 1px solid var(--border-gray);
`;

const SlideImg = styled.img`
  width: 20px;
  height: 20px;
`;

const SlideText = styled.p`
  font-size: 0.7rem;
  font-weight: bold;
  color: var(--font-lightgray);
`;

const FilterBtn = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border: 1px solid var(--border-gray);
  font-weight: bold;
  font-size: 0.7rem;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  background-color: transparent;
  cursor: pointer;
`;

const FilterIcon = styled(RiFilter2Fill)`
  font-size: 1rem;
`;

const Filter = () => {
  const [slidesInfo, setSlidesInfo] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("/data/filter-slide-data.json")
      .then((res) => res.json())
      .then((data) => setSlidesInfo(data));
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <Layout>
      <Swiper slidesPerView={16} slidesPerGroup={12} speed={800} navigation>
        {slidesInfo &&
          slidesInfo.map((slide) => (
            <SwiperSlide key={uuid4()}>
              <SlideImg src={slide.img} alt={slide.title} />
              <SlideText>{slide.title}</SlideText>
            </SwiperSlide>
          ))}
      </Swiper>
      <FilterBtn type="button" onClick={() => setIsModalOpen(true)}>
        <FilterIcon />
        필터
      </FilterBtn>

      {isModalOpen && <Modal modalHandler={setIsModalOpen} />}
    </Layout>
  );
};

export default Filter;
