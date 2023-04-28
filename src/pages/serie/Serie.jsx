import React from "react";
import WrapperSerie from "../../components/seriePageComponents/WrapperSerie";
import CardProductGrafica from "../../components/seriePageComponents/CardProductGrafica";
import WrapperProducts from "../../components/seriePageComponents/WrapperProducts";
import WrapperAsideProducts from "../../components/seriePageComponents/WrapperAsideProducts";
import WrapperContainerProducts from "../../components/seriePageComponents/WrapperContainerProducts";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFiltersAside } from "../../redux/slices/toggleFiltersAsideProductsSlice";
import { useParams } from "react-router-dom";

const Serie = () => {
  const dispatch = useDispatch();

  const { serieParam } = useParams();

  const findNumberOfSerie = () => {
    const find = series.find((obj) => obj.linkToProp === serieParam);
    return find.serie;
  };

  const { openFiltersAside } = useSelector((state) => state.toggleFiltersAsideProductsSlice);
  const { products } = useSelector((state) => state.productsSlice);
  const { series } = useSelector((state) => state.seriesSlice);
  const productsFilter = products.filter((prod) => prod.serie === findNumberOfSerie());


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

            {productsFilter.map(
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
    </>
  );
};

export default Serie;
