import React from "react";
import styled from "styled-components";
import ImgCard from "./ImgCard";
import ImgInfo from "./ImgInfo";
import { useNavigate } from "react-router-dom";

const Layout = styled.div`
  width: 100%;
  cursor: pointer;
  overflow: hidden;
`;

export default function ItemCard({ data, region }) {
  const navigate = useNavigate();

  const handleNavigate = (data, region) => {
    navigate(`/roomDetail/${region}-${data.name.replaceAll(" ", "")}`, {
      state: {
        region: region,
        data: data,
        coordinates: { X: data.X, Y: data.Y },
      },
    });
  };

  return (
    <Layout onClick={() => handleNavigate(data, region)}>
      <ImgCard urls={data.img_path} />
      <ImgInfo data={data} region={region} />
    </Layout>
  );
}
