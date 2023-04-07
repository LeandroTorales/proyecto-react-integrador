import React from "react";
import WrapperSerie from "../../../components/seriePageComponents/WrapperSerie";
import WrapperProducts from "../../../components/seriePageComponents/WrapperProducts";
import WrapperAsideProducts from "../../../components/seriePageComponents/WrapperAsideProducts";
import WrapperContainerProducts from "../../../components/seriePageComponents/WrapperContainerProducts";
import CardProductGrafica from "../../../components/seriePageComponents/CardProductGrafica";
import { products } from "../../../data/products";

const Serie30 = () => {
  return (
    <WrapperSerie>
      <WrapperProducts>
        <WrapperAsideProducts></WrapperAsideProducts>
        <WrapperContainerProducts>
          {products
            .filter((prod) => prod.serie === 30)
            .map(
              ({
                id,
                serie,
                modelo,
                fabricante,
                marca,
                isTi,
                stock,
                price,
                tamañoDeMemoria,
                tipoDeMemoriaGrafica,
                imgProduct,
              }) => (
                <CardProductGrafica
                  id={id}
                  serie={serie}
                  modelo={modelo}
                  fabricante={fabricante}
                  marca={marca}
                  isTi={isTi}
                  stock={stock}
                  price={price}
                  tamañoDeMemoria={tamañoDeMemoria}
                  tipoDeMemoriaGrafica={tipoDeMemoriaGrafica}
                  imgProduct={imgProduct}
                  key={id}
                />
              )
            )}
        </WrapperContainerProducts>
      </WrapperProducts>
    </WrapperSerie>
  );
};

export default Serie30;
