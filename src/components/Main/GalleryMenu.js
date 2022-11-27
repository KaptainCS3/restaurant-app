import React from "react";
import style from "../../style/galleryMenu.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BreakFast from "../Main/BreakFast";
import Salads from "../Main/Salads";
import MeatFish from "../Main/MeatFish";
import Soups from "../Main/Soups";
import Desserts from "../Main/Desserts";
import Drinks from "../Main/Drinks";
import GalleryCard from "./GalleryCard";
const GalleryMenu = () => {
  return (
    <section className={style.menu__gallery}>
      <h3 className={style.gallery__heading}>Browse</h3>
      <h2 className={style.gallery__main}>Our Categorised Gallery</h2>
      <nav className={style.nav__tab}>
        <Link to="/" className={style.gallery__links}>
          BreakFast
        </Link>
        <Link to="/Salads" className={style.gallery__links}>
          Salads
        </Link>
        <Link to="/MeatFish" className={style.gallery__links}>
          Meat & Fish
        </Link>
        <Link to="/Soups" className={style.gallery__links}>
          Soups
        </Link>
        <Link to="/Desserts" className={style.gallery__links}>
          Desserts
        </Link>
        <Link to="/Drinks" className={style.gallery__links}>
          Drinks
        </Link>
      </nav>
      {/* <BrowserRouter>
        <Routes>
          <Route
            path="salads"
            element={
              // <div className="App">
              //   <div id="form__container">
                  <Salads />
              //   </div>
              // </div>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="meat & fish"
            element={
              // <div className="App">
              //   <div id="form__container">
                  <MeatFish />
              //   </div>
              // </div>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="soup"
            element={
              // <div className="App">
              //   <div id="form__container">
                  <Soups />
              //   </div>
              // </div>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="desserts"
            element={
              // <div className="App">
              //   <div id="form__container">
                  <Desserts />
              //   </div>
              // </div>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="drinks"
            element={
              // <div className="App">
              //   <div id="form__container">
                  <Drinks />
              //   </div>
              // </div>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              // <div className="App">
              //   <div id="form__container">
                  <BreakFast />
              //   </div>
              // </div>
            }
          />
        </Routes>
      </BrowserRouter> */}
      <GalleryCard />
      <div className={style.btn__container}>
        <button className={style.gallery__btn}>See All</button>
      </div>
    </section>
  );
};

export default GalleryMenu;
