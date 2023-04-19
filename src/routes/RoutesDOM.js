import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import AcercaDe from "../pages/acercaDe/AcercaDe";
import SectionSeries from "../components/sectionSeries/SectionSeries";
import { scrollToTop } from "../utils/scrollToTop";
import Cart from "../pages/cart/Cart";
import Serie from "../pages/series/Serie";

const RoutesDOM = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/series" element={<SectionSeries />} />
      <Route path="/series/:serieParam" element={<Serie />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/acercaDe" element={<AcercaDe />} />
    </Routes>
  );
};

export default RoutesDOM;
