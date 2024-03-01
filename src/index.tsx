import * as React from "react";
import * as ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import "./index.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
