import React, { useEffect } from "react";
import WrapperSerie from "../../components/seriePageComponents/WrapperSerie";
import CardProductGrafica from "../../components/seriePageComponents/CardProductGrafica";
import WrapperProducts from "../../components/seriePageComponents/WrapperProducts";
import WrapperAsideProducts from "../../components/seriePageComponents/WrapperAsideProducts";
import WrapperContainerProducts from "../../components/seriePageComponents/WrapperContainerProducts";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilterAction,
  toggleFiltersAside,
} from "../../redux/slices/toggleFiltersAsideProductsSlice";
import { useParams } from "react-router-dom";
import ContainerButtonsFilters from "../../components/seriePageComponents/buttonFilterAside/ContainerButtonsFilters";

const Serie = () => {
  const { serieParam } = useParams();
  const { openFiltersAside } = useSelector((state) => state.toggleFiltersAsideProductsSlice);
  const { filter } = useSelector((state) => state.toggleFiltersAsideProductsSlice);
  const { filterValue } = useSelector((state) => state.toggleFiltersAsideProductsSlice);
  const { products } = useSelector((state) => state.productsSlice);
  const { series } = useSelector((state) => state.seriesSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearFilterAction());
  }, [serieParam, dispatch]);

  const findNumberOfSerie = () => {
    const find = series.find((obj) => obj.linkToProp === serieParam);
    return find.serie;
  };

  const productsFilter = products.filter((prod) => prod.serie === findNumberOfSerie());

  const filterAsideFunc = () => {
    return productsFilter.filter((prod) => prod[filter] === filterValue);
  };

  const objectWithValuesAsideFilter = (filter, value) => {
    return {
      filter: filter,
      value: value,
    };
  };

  return (
    <>
      <WrapperSerie>
        <WrapperProducts>
          <WrapperAsideProducts>
            <h2>Filtros:</h2>
            <ContainerButtonsFilters objectWithValuesAsideFilter={objectWithValuesAsideFilter} />
          </WrapperAsideProducts>
          <WrapperContainerProducts>
            <BsFillArrowRightSquareFill
              className={`icon--filter__forResponsive ${
                openFiltersAside ? "activeAsideButton" : ""
              }`}
              onClick={() => dispatch(toggleFiltersAside())}
            />

            {filter === null ? (
              productsFilter.map(
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
              )
            ) : filterAsideFunc().length === 0 ? (
              <div className="noFilterFind">
                <p>¡Ups!, no encontramos productos que cumplan con este filtro.</p>
              </div>
            ) : (
              filterAsideFunc().map(
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
              )
            )}
          </WrapperContainerProducts>
        </WrapperProducts>
      </WrapperSerie>
    </>
  );
};

export default Serie;
