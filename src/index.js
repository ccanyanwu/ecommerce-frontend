// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
>>>>>>> eb5b1c7cfb4fa011d709eab9ae76895b3ba7d622
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./autharea/pages/Home";
import Login from "./noautharea/pages/Login";
import reportWebVitals from "./reportWebVitals";
<<<<<<< HEAD
import "./index.css";
import Layout from "./Layout";
import Register from "./noautharea/pages/Register";
=======
import './index.css';
import Layout from './Layout';
import Register from './noautharea/pages/Register';
>>>>>>> eb5b1c7cfb4fa011d709eab9ae76895b3ba7d622

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
