import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index";
import RegisterPage from "views/examples/RegisterPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/components" element={<Index />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/components" />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
