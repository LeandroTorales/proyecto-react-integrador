import React from "react";
import WrapperSerie from "../../../components/seriePageComponents/WrapperSerie";
import CardProductGrafica from "../../../components/seriePageComponents/CardProductGrafica";
import WrapperProducts from "../../../components/seriePageComponents/WrapperProducts";
import WrapperAsideProducts from "../../../components/seriePageComponents/WrapperAsideProducts";
import WrapperContainerProducts from "../../../components/seriePageComponents/WrapperContainerProducts";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFiltersAside } from "../../../redux/slices/toggleFiltersAsideProductsSlice";

const Serie20 = () => {
  const dispatch = useDispatch();

  const { openFiltersAside } = useSelector((state) => state.toggleFiltersAsideProductsSlice);

  return (
    <>
      <WrapperSerie>
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
      </WrapperSerie>
    </>
  );
};

export default Serie20;
