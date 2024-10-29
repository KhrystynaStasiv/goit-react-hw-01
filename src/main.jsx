import React from "react";
import ReactDOM from "react-dom/client";
// Імпорт стилів нормалізації
import App from "./components/App.jsx";
import "./index.css";
import "modern-normalize";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
