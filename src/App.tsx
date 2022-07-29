import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ManagerAppointmentForm } from "./components";
import { AuthProvider } from "./context";
import { About, Home, Login } from "./pages";
import { store } from "./redux";

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="login" />} />
              <Route path="login" element={<Login />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route
                path="manage-appointment-form"
                element={<ManagerAppointmentForm />}
              />
              <Route path="*" element={<div>Error 404! Page Not found</div>} />
            </Routes>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </Provider>
  );
};

export default App;
