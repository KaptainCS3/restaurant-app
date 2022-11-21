import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Welcome from "./components/Main/Welcome";
import About from "./components/Main/About";
import Card from "./components/Main/Card";
import data from "./data";
import CardContainer from "./components/Main/CardContainer";

const cardData = data.map((el) => {});
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Nav />
            <Welcome />
            <About />
            <>
            <CardContainer />
            </>
            <Footer />
          </div>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
