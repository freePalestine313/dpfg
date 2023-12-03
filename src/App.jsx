import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import "./App.css";
import { AppContextProvider } from "./contexts/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </AppContextProvider>
  );
}

export default App;
