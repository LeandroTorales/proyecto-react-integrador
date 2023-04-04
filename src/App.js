import React from "react";
import Navbar from "./components/navbar/Navbar";

import HomePage from "./pages/homePage/HomePage";
import ContainerFooter from "./components/footer/ContainerFooter";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <ContainerFooter />
    </>
  );
}

export default App;
