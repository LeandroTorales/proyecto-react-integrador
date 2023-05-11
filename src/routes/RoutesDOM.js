import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import AcercaDe from "../pages/acercaDe/AcercaDe";
import SectionSeries from "../components/sectionSeries/SectionSeries";
import { scrollToTop } from "../utils/scrollToTop";
import Cart from "../pages/cart/Cart";
import Serie from "../pages/serie/Serie";
import LoginRegisterPage from "../pages/loginRegister/LoginRegisterPage";
import ProfileUserPage from "../pages/profileUser/ProfileUserPage";
import OrderInformationPage from "../pages/order/OrderInformationPage";

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
      <Route path="/orderInformation/:orderParam" element={<OrderInformationPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profileUser" element={<ProfileUserPage />} />
      <Route path="/acercaDe" element={<AcercaDe />} />
      <Route path="/loginRegister" element={<LoginRegisterPage />} />
    </Routes>
  );
};

export default RoutesDOM;
