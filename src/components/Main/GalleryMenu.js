import React, { useState } from "react";
import style from "../../style/galleryMenu.module.css";
// import list from "../../list";
import tabs from "../../tabs";
import TabLinks from "./TabLinks";
const GalleryMenu = () => {
  const toggle = () => {};

  const tab = tabs.map((el) => {
    return <TabLinks key={el.id} el={el} />;
  });

  return (
    <section className={style.menu__gallery}>
      <h3 className={style.gallery__heading}>Browse</h3>
      <h2 className={style.gallery__main}>Our Categorised Gallery</h2>
      <nav className={style.nav__tab}>{tab}</nav>
      {/* {listComponent} */}
      <div className={style.btn__container}>
        <button className={style.gallery__btn}>See All</button>
      </div>
    </section>
  );
};

export default GalleryMenu;
