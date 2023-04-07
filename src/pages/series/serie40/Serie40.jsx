import React from "react";
import WrapperSerie from "../../../components/seriePageComponents/WrapperSerie";
import WrapperProducts from "../../../components/seriePageComponents/WrapperProducts";
import WrapperAsideProducts from "../../../components/seriePageComponents/WrapperAsideProducts";
import WrapperContainerProducts from "../../../components/seriePageComponents/WrapperContainerProducts";
import CardProductGrafica from "../../../components/seriePageComponents/CardProductGrafica";

const Serie40 = () => {
  return (
    <WrapperSerie>
      <WrapperProducts>
        <WrapperAsideProducts></WrapperAsideProducts>
        <WrapperContainerProducts>
          <CardProductGrafica></CardProductGrafica>
          <CardProductGrafica></CardProductGrafica>
          <CardProductGrafica></CardProductGrafica>
          <CardProductGrafica></CardProductGrafica>
        </WrapperContainerProducts>
      </WrapperProducts>
    </WrapperSerie>
  );
};

export default Serie40;
