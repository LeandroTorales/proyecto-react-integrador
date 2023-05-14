import React from "react";
import { useDispatch } from "react-redux";
import {
  filterAction,
  filterValueAction,
} from "../../../redux/slices/toggleFiltersAsideProductsSlice";
import "./styles.css";

const ButtonFilterAside = ({ onClickProp, nameButton }) => {
  const dispatch = useDispatch();

  const handleFunc = (filter, value) => {
    dispatch(filterAction(filter));
    dispatch(filterValueAction(value));
  };

  return (
    <button onClick={() => handleFunc(onClickProp().filter, onClickProp().value)}>
      {nameButton}
    </button>
  );
};

export default ButtonFilterAside;
