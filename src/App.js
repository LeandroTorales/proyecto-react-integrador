import React from "react";
import Navbar from "./components/navbar/Navbar";
import ContainerFooter from "./components/footer/ContainerFooter";
import RoutesDOM from "./routes/RoutesDOM";

function App() {
  return (
    <>
      <Navbar />
      <RoutesDOM />
      <ContainerFooter />
    </>
  );
}

export default App;
