import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import App from "./App";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
    <App />
);
