import React from "react";
import { FaBars } from "react-icons/fa";
import "./styles.css";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../../redux/slices/toggleMenuSlice";

const BarsHamburguesaNavbar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="icon icon--hamburguesa linkOfNavbar" onClick={() => dispatch(toggleMenu())}>
        <FaBars className="linkOfNavbar" />
      </div>
    </>
  );
};

export default BarsHamburguesaNavbar;
