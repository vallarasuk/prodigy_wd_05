import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

// Custom Styles
import "./Styles/main-page.css"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
