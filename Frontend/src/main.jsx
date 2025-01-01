import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserinContext from "./context/UserinContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserinContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserinContext>
  </StrictMode>
);
