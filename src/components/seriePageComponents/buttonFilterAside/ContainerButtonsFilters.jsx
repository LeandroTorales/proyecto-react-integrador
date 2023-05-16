import React from "react";
import ButtonFilterAside from "./ButtonFilterAside";
import "./styles.css";
import { clearFilterAction } from "../../../redux/slices/toggleFiltersAsideProductsSlice";

const ContainerButtonsFilters = ({ objectWithValuesAsideFilter }) => {
  return (
    <div>
      <div className="division--sectionFilter">
        <p>Marca</p>
        <ButtonFilterAside
          nameButton={"Gigabyte"}
          onClickProp={() => objectWithValuesAsideFilter("marca", "Gigabyte")}
        >
          isTi
        </ButtonFilterAside>
        <ButtonFilterAside
          nameButton={"ZOTAC"}
          onClickProp={() => objectWithValuesAsideFilter("marca", "ZOTAC")}
        >
          isTi
        </ButtonFilterAside>
        <ButtonFilterAside
          nameButton={"MSI"}
          onClickProp={() => objectWithValuesAsideFilter("marca", "MSI")}
        >
          isTi
        </ButtonFilterAside>
        <ButtonFilterAside
          nameButton={"ASUS"}
          onClickProp={() => objectWithValuesAsideFilter("marca", "ASUS")}
        >
          isTi
        </ButtonFilterAside>
      </div>

      <div className="division--sectionFilter">
        <p>Tamaño de memoria</p>
        <ButtonFilterAside
          nameButton={"8gb"}
          onClickProp={() => objectWithValuesAsideFilter("tamañoDeMemoria", "8gb")}
        >
          isTi
        </ButtonFilterAside>
        <ButtonFilterAside
          nameButton={"12gb"}
          onClickProp={() => objectWithValuesAsideFilter("tamañoDeMemoria", "12gb")}
        >
          isTi
        </ButtonFilterAside>
        <ButtonFilterAside
          nameButton={"16gb"}
          onClickProp={() => objectWithValuesAsideFilter("tamañoDeMemoria", "16gb")}
        >
          isTi
        </ButtonFilterAside>
      </div>

      <div className="division--sectionFilter">
        <p>Tipo de memoria gráfica</p>
        <ButtonFilterAside
          nameButton={"Gddr6"}
          onClickProp={() => objectWithValuesAsideFilter("tipoDeMemoriaGrafica", "Gddr6")}
        >
          isTi
        </ButtonFilterAside>
        <ButtonFilterAside
          nameButton={"GDDR6X"}
          onClickProp={() => objectWithValuesAsideFilter("tipoDeMemoriaGrafica", "GDDR6X")}
        >
          isTi
        </ButtonFilterAside>
      </div>

      <div className="division--sectionFilter">
        <p>Otras especificaciones</p>
        <ButtonFilterAside
          nameButton={"Es Ti"}
          onClickProp={() => objectWithValuesAsideFilter("isTi", true)}
        >
          isTi
        </ButtonFilterAside>
      </div>
      <div className="division--sectionFilter">
        <ButtonFilterAside nameButton={"Limpiar filtro"} onClickProp={() => clearFilterAction()}>
          isTi
        </ButtonFilterAside>
      </div>
    </div>
  );
};

export default ContainerButtonsFilters;
