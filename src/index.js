import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import RegisterPage from "views/examples/RegisterPage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/components" element={<Index />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/" element={<Navigate to="/components" />} />
    </Routes>
  </BrowserRouter>
);
