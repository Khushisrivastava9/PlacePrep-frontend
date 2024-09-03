import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";
import { ResourceContextProvider } from "./context/ResourceContext.jsx";

export const server = "http://localhost:5000";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <ResourceContextProvider>
        <App />
      </ResourceContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
