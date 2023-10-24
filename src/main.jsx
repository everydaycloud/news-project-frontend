import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from './Components/UserContext';
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>
);
