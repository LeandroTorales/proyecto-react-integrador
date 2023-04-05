import React from "react";
import WrapperGeneracion from "../../../components/generationPageComponents/WrapperGeneracion";
import CardProductGrafica from "../../../components/generationPageComponents/CardProductGrafica";
import WrapperProducts from "../../../components/generationPageComponents/WrapperProducts";
import WrapperAsideProducts from "../../../components/generationPageComponents/WrapperAsideProducts";
import WrapperContainerProducts from "../../../components/generationPageComponents/WrapperContainerProducts";

const Generacion2000 = () => {
  return (
    <>
      <WrapperGeneracion>
        <WrapperProducts>
          <WrapperAsideProducts></WrapperAsideProducts>
          <WrapperContainerProducts>
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
