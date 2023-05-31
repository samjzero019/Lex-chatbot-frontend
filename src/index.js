import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import "./config/lexV2";

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
