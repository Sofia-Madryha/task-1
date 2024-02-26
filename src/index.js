import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import './styles/main.scss';
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);


