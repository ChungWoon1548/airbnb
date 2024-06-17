import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ImgRoomDetail = ({ urls }) => {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((resdata) => setImgs(resdata));
  }, []);

  return (
    <>
      <ImageContainer>
        <Img0 src={urls[0]} />
        <SmallImgs>
          <div>
            <Img1 src={urls[1]} />
            <Img2 src={urls[2]} />
          </div>
          <div>
            <Img3 src={urls[3]} />
            <Img4 src={urls[4]} />
          </div>
        </SmallImgs>
      </ImageContainer>
    </>
  );
};

export default ImgRoomDetail;

const ImageContainer = styled.div`
  display: flex;
`;

const Img0 = styled.img`
  width: 590px;
  height: 514px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0 3px 0 0;
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
  }

  @media screen and (max-width: 800px) {
    max-width: 50%;
    height: auto;
  }
`;

const SmallImgs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Img1 = styled.img`
  width: 280px;
  height: 255px;
  object-fit: cover;
  padding: 0 3px 1px 3px;
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
  }

  @media screen and (max-width: 800px) {
    max-width: 50%;
    height: auto;
  }
`;

const Img2 = styled.img`
  width: 280px;
  height: 255px;
  object-fit: cover;
  border-top-right-radius: 10px;
  padding: 0 0 1px 3px;
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
  }

  @media screen and (max-width: 800px) {
    max-width: 50%;
    height: auto;
  }
`;

const Img3 = styled.img`
  width: 280px;
  height: 255px;
  object-fit: cover;
  padding: 1px 3px 0 3px;
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
  }

  @media screen and (max-width: 800px) {
    max-width: 50%;
    height: auto;
  }
`;

const Img4 = styled.img`
  width: 280px;
  height: 255px;
  object-fit: cover;
  border-bottom-right-radius: 10px;
  padding: 1px 0 0 3px;
  cursor: pointer;

  &:hover {
    filter: brightness(92%);
  }

  @media screen and (max-width: 800px) {
    max-width: 50%;
    height: auto;
  }
`;
