import React from "react";
import AppRouter from "./router/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import AuthProvider from "./auth/AuthProvider";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
        <AuthProvider>
        <AppRouter />
        <ToastContainer />
        </AuthProvider>
  );
};

export default App;