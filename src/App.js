import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Welcome from "./components/Main/Welcome";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Nav />
            <Welcome />
            <Footer />
          </div>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
