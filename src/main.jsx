import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/modern-normalize.css";
import "./styles/style.css";
import "./styles/utils.css";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
