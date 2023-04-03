import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../../redux/slices/toggleMenuSlice";

const FondoOnBlur = () => {
  const state = useSelector((state) => state.openMenu);
  const dispatch = useDispatch();

  return (
    <div
      className={`onBlur--fondo ${state ? "activeBlur" : ""}`}
      onClick={() => dispatch(toggleMenu())}
    ></div>
  );
};

export default FondoOnBlur;
