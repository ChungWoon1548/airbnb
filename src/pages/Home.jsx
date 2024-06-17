import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { FilterProvider } from "../contexts/FilterContext";

export default function Home() {
  return (
    <FilterProvider>
      <Header />
      <Outlet />
      <Footer />
    </FilterProvider>
  );
}
