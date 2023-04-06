import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import Generacion2000 from "../pages/generaciones/generacion2000/Generacion2000";
import Generacion3000 from "../pages/generaciones/generacion3000/Generacion3000";
import Generacion4000 from "../pages/generaciones/generacion4000/Generacion4000";
import AcercaDe from "../pages/acercaDe/AcercaDe";
import SectionGeneraciones from "../components/sectionGeneraciones/SectionGeneraciones";
import { scrollToTop } from "../utils/scrollToTop";

const RoutesDOM = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/generacion2000" element={<Generacion2000 />} />
      <Route path="/generacion3000" element={<Generacion3000 />} />
      <Route path="/generacion4000" element={<Generacion4000 />} />
      <Route path="/generaciones" element={<SectionGeneraciones />} />
      <Route path="/acercaDe" element={<AcercaDe />} />
    </Routes>
  );
};

export default RoutesDOM;
