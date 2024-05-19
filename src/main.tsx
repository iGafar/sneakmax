import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/null.css";
import "./styles/constants.css";
import "./styles/fonts.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
