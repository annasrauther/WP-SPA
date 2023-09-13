// Import dependencies
import React from "react";
import ReactDOM from "react-dom/client";

// Import components
import App from "./App";

// Import styles
import "./styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
