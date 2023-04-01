import React from "react";
import ContainerNavbar from "./containerNavbar/ContainerNavbar";
import LinkNavbarComponent from "./links/LinkNavbarComponent";
import LinkLogoNavbarComponent from "./links/LinkLogoNavbarComponent";
import ContainerLinks from "./links/ContainerLinks";

const Navbar = () => {
  return (
    <>
      <ContainerNavbar>
        <LinkLogoNavbarComponent nameLink={"GraphicsHeaven"} to={"https://twitter.com"} />
        <ContainerLinks>
          <LinkNavbarComponent nameLink={"Inicio"} to={"https://twitter.com"} />
          <LinkNavbarComponent nameLink={"Marcas"} to={"https://google.com"} />
          <LinkNavbarComponent nameLink={"Acerca de"} to={"https://twitter.com"} />
        </ContainerLinks>
      </ContainerNavbar>
    </>
  );
};

export default Navbar;
