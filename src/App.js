import React from "react";
import Navbar from "./components/navbar/Navbar";
import GlobalStyles from "./components/globalStyles/GlobalStyles";
import HomePage from "./components/homePage/HomePage";
import ContainerFooter from "./components/footer/ContainerFooter";


function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <HomePage />
      <ContainerFooter />
    </>
  );
}

export default App;
