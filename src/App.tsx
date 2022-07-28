import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context";
import { Login } from "./pages";

const App = () => {
  return (
    <AuthProvider>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="login" />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
};

export default App;
