import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/null.css";
import "./styles/constants.css";
import "./styles/fonts.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
