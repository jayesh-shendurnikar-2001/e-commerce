import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import './index.css'
import { store } from "./app/store";
import router from "./routes/router";

// Create root and render React application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Provide Redux store to entire application */}
    <Provider store={store}>
      {/* Provide router to enable navigation */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
