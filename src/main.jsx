import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UsersProviders } from "./context/usersProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsersProviders>
      <App />
    </UsersProviders>
  </React.StrictMode>
);
