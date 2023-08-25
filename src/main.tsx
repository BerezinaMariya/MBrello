import React from "react";
import ReactDOM from "react-dom/client";

import "@/shared/lib/sentry";

import { App } from "@/app";

import "./app/styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
