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
  const { dataUser } = useSelector((state) => state.registerSlice);
  console.log("f:", dataUser);

  return (
    <>
      <ContainerNavbar>
        <LinkLogoNavbarComponent nameLink={"GraphicsHeaven"} to={"/"} />
        <ContainerLinks>
          <LinkNavbarComponent nameLink={"Inicio"} to={"/"} />
          <LinkNavbarComponent nameLink={"Series"} to={"/series"} />
          {dataUser !== null ? (
            <ButtonLogout />
          ) : (
            <LinkNavbarComponent
              nameLink={`${dataUser !== null ? "Cerrar Sesión" : "Login/Register"}`}
              to={"/loginRegister"}
            />
          )}
          <LinkNavbarComponent nameLink={"Acerca de"} to={"/acercaDe"} />
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
