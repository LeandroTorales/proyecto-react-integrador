import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../../redux/slices/toggleMenuSlice";

const ContainerNavbar = ({ children }) => {
  const { openMenu } = useSelector((state) => state.toggleMenuSlice);
  const dispatch = useDispatch();

  const handleToggleMenuOnLink = (e) => {
    if (e.target.classList.contains("linkOfNavbar") && openMenu === true) {
      dispatch(toggleMenu());
    }
  };

  return (
    <>
      <div className="main--container__navbar" onClick={handleToggleMenuOnLink}>
        {children}
      </div>
    </>
  );
};

export default ContainerNavbar;
