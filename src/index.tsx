// Import dependencies
import React from "react";
import { createRoot } from "react-dom/client";

// Import components
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

// Import styles
import "./styles/index.css";

// Get the root element
const rootElement = document.getElementById("root");

// Throw an error if the root element is null
if (!rootElement) {
  throw new Error("Root element with id 'root' not found in the DOM.");
}

/**
 * Render the app.
 *
 * Wrap the app in an ErrorBoundary component to catch any errors that occur
 * during rendering, and display a fallback UI instead of the app.
 */
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
