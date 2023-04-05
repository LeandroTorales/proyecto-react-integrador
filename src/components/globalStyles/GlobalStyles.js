import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  box-sizing: border-box;
  list-style: none;
  font-family: "Roboto", sans-serif;  
  margin: 0px;
  padding: 0px;
  text-decoration: none;scrollbar-width: auto;
    scrollbar-color: #000000 #e3e3e3;
}

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #e3e3e3;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 2px;
    border: 3px solid #e3e3e3;
  }

body{
    margin: 0px;
    padding: 0px;
    background-color: black;
    color: white;
    text-decoration: none;
}

:root {
    --BorderBottomSeparadorSecciones: #818181;
}

html{
    scroll-behavior: smooth;
}

a{
    user-select: none;
}

a:any-link {
    color: white;
}

a:visited{
    color: white;
}

`;

export default GlobalStyles;
