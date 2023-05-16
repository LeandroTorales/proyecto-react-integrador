import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import GlobalStyles from "./components/globalStyles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/es/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

reportWebVitals();
