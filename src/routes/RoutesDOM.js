import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import AcercaDe from "../pages/acercaDe/AcercaDe";
import SectionSeries from "../components/sectionSeries/SectionSeries";
import { scrollToTop } from "../utils/scrollToTop";
import Serie20 from "../pages/series/serie20/Serie20";
import Serie30 from "../pages/series/serie30/Serie30";
import Serie40 from "../pages/series/serie40/Serie40";
import Cart from "../pages/cart/Cart";

const RoutesDOM = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/series" element={<SectionSeries />} />
      <Route path="/serie20" element={<Serie20 />} />
      <Route path="/serie30" element={<Serie30 />} />
      <Route path="/serie40" element={<Serie40 />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/acercaDe" element={<AcercaDe />} />
    </Routes>
  );
};

export default RoutesDOM;
