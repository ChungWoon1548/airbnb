import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  padding-left: 0.3rem;
  margin-top: 0.5rem;
`;

const Place = styled.p`
  font-weight: bold;
`;

const Price = styled.strong`
  font-weight: bold;
  margin-top: 0.3rem;
`;

const Quality = styled.p`
  color: var(--font-lightgray);
  margin-top: 0.3rem;
`;

export default function ImgInfo({ data, region }) {
  const { name, rating, price } = data;
  return (
    <Layout>
      <Place>{name}</Place>
      <Quality>
        {region} &middot; {rating}
      </Quality>
      <Price>{price ? `₩${price} /박` : "예약 마감"}</Price>
    </Layout>
  );
}
