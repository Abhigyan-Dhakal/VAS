import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context";
import { About, Home, Login } from "./pages";

const App = () => {
  return (
    <AuthProvider>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="login" />} />
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<div>Error 404! Page Not found</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
};

export default App;
