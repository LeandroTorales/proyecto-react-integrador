import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../../redux/slices/toggleMenuSlice";

const FondoOnBlur = () => {
  const { openMenu } = useSelector((state) => state.toggleMenuSlice);
  
  const dispatch = useDispatch();

  return (
    <div
      className={`onBlur--fondo ${openMenu ? "activeBlur" : ""}`}
      onClick={() => dispatch(toggleMenu())}
    ></div>
  );
};

export default FondoOnBlur;
