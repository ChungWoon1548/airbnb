import { createContext, useEffect, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // 초기 데이터 세팅
  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  // 필터링 데이터 세팅
  const handleData = async (filter) => {
    const filterRegion = allData.filter((data) => data.region === filter.destination);
    setFilteredData(filterRegion);
  };

  const handlePrice = async (price) => {
    const { start, end } = price;

    const filterPrice = allData.filter((data) =>
      data.hotels.filter(
        (hotel) =>
          hotel.price.toString().replace(" ", "") >= start &&
          hotel.price.toString().replace(" ", "") <= end
      )
    );

    console.log({ filterPrice });

    setFilteredData(filterPrice);
  };

  return (
    <FilterContext.Provider value={{ filteredData, allData, handleData, handlePrice }}>
      {children}
    </FilterContext.Provider>
  );
};
