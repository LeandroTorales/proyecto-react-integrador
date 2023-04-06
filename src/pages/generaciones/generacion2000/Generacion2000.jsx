import React from "react";
import WrapperGeneracion from "../../../components/generationPageComponents/WrapperGeneracion";
import CardProductGrafica from "../../../components/generationPageComponents/CardProductGrafica";
import WrapperProducts from "../../../components/generationPageComponents/WrapperProducts";
import WrapperAsideProducts from "../../../components/generationPageComponents/WrapperAsideProducts";
import WrapperContainerProducts from "../../../components/generationPageComponents/WrapperContainerProducts";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFiltersAside } from "../../../redux/slices/toggleFiltersAsideProductsSlice";

const Generacion2000 = () => {
  const dispatch = useDispatch();

  const { openFiltersAside } = useSelector((state) => state.toggleFiltersAsideProductsSlice);

  return (
    <>
      <WrapperGeneracion>
        <WrapperProducts>
          <WrapperAsideProducts></WrapperAsideProducts>
          <WrapperContainerProducts>
            <BsFillArrowRightSquareFill
              className={`icon--filter__forResponsive ${
                openFiltersAside ? "activeAsideButton" : ""
              }`}
              onClick={() => dispatch(toggleFiltersAside())}
            />
            <CardProductGrafica></CardProductGrafica>
            <CardProductGrafica></CardProductGrafica>
            <CardProductGrafica></CardProductGrafica>
            <CardProductGrafica></CardProductGrafica>
            <CardProductGrafica></CardProductGrafica>
            <CardProductGrafica></CardProductGrafica>
          </WrapperContainerProducts>
        </WrapperProducts>
      </WrapperGeneracion>
    </>
  );
};

export default Generacion2000;
