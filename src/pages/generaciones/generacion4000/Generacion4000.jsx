import React from "react";
import WrapperGeneracion from "../../../components/generationPageComponents/WrapperGeneracion";
import WrapperProducts from "../../../components/generationPageComponents/WrapperProducts";
import WrapperAsideProducts from "../../../components/generationPageComponents/WrapperAsideProducts";
import WrapperContainerProducts from "../../../components/generationPageComponents/WrapperContainerProducts";
import CardProductGrafica from "../../../components/generationPageComponents/CardProductGrafica";

const Generacion4000 = () => {
  return (
    <WrapperGeneracion>
      <WrapperProducts>
        <WrapperAsideProducts></WrapperAsideProducts>
        <WrapperContainerProducts>
          <CardProductGrafica></CardProductGrafica>
          <CardProductGrafica></CardProductGrafica>
          <CardProductGrafica></CardProductGrafica>
          <CardProductGrafica></CardProductGrafica>
        </WrapperContainerProducts>
      </WrapperProducts>
    </WrapperGeneracion>
  );
};

export default Generacion4000;
