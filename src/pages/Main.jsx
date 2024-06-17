import React, { useContext } from "react";
import styled from "styled-components";
import ItemCard from "../common/ItemCard";
import { v4 as uuid4 } from "uuid";
import { FilterContext } from "../contexts/FilterContext";
import Filter from "../components/Filter/Filter";

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 150px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 1650px;
  padding: 1rem 2rem;

  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
    min-width: 400px;
  }
`;

export default function Main() {
  const { filteredData, allData } = useContext(FilterContext);

  const data = filteredData.length === 0 ? allData : filteredData;
  console.log(data);
  return (
    <Layout>
      <Filter />
      <Grid>
        {data.map((data) =>
          data.hotels.map((hotel) => <ItemCard key={uuid4()} data={hotel} region={data.region} />)
        )}
      </Grid>
    </Layout>
  );
}
