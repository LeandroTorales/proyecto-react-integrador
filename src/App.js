import React from "react";
import Navbar from "./components/navbar/Navbar";
import GlobalStyles from "./components/globalStyles/GlobalStyles";
import HomePage from "./components/homePage/HomePage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <HomePage />
    </>
  );
}

export default App;
