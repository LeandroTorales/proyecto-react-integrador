import React from "react";
import ContainerNavbar from "./containerNavbar/ContainerNavbar";
import LinkNavbarComponent from "./links/LinkNavbarComponent";
import LinkLogoNavbarComponent from "./links/LinkLogoNavbarComponent";
import ContainerLinks from "./links/ContainerLinks";
import BarsHamburguesaNavbar from "./barsHamburguesa/BarsHamburguesaNavbar";
import IconCart from "./links/IconCart";
import FondoOnBlur from "./onBlur/FondoOnBlur";
import { useSelector } from "react-redux";
import ButtonLogout from "../buttonLogout/ButtonLogout";

const Navbar = () => {
  const { isLogin } = useSelector((state) => state.registerSlice);

  return (
    <>
      <ContainerNavbar>
        <LinkLogoNavbarComponent nameLink={"GraphicsHeaven"} to={"/"} />
        <ContainerLinks>
          <LinkNavbarComponent nameLink={"Inicio"} to={"/"} />
          <LinkNavbarComponent nameLink={"Series"} to={"/series"} />
          <LinkNavbarComponent nameLink={"Acerca de"} to={"/acercaDe"} />
          {isLogin === true ? (
            <ButtonLogout />
          ) : (
            <LinkNavbarComponent nameLink={"Login/Register"} to={"/loginRegister"} />
          )}
          <LinkNavbarComponent to={"/cart"}>
            <IconCart />
          </LinkNavbarComponent>
        </ContainerLinks>
        <BarsHamburguesaNavbar />
        <FondoOnBlur />
      </ContainerNavbar>
    </>
  );
};

export default Navbar;
