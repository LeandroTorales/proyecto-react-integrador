import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

const WrapperAsideProducts = ({ children }) => {
  const { openFiltersAside } = useSelector((state) => state.toggleFiltersAsideProductsSlice);

  return (
    <aside className={`wrapper--asideProducts ${openFiltersAside ? "activeAsideProducts" : ""}`}>
      {children}
    </aside>
  );
};

export default WrapperAsideProducts;
