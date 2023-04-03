import React from "react";
import { FaBars } from "react-icons/fa";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../../redux/slices/toggleMenuSlice";

const BarsHamburguesaNavbar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="icon icon--hamburguesa" onClick={() => dispatch(toggleMenu())}>
        <FaBars />
      </div>
    </>
  );
};

export default BarsHamburguesaNavbar;
