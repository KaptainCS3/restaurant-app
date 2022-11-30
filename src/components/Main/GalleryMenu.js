import React, { useState } from "react";
import style from "../../style/galleryMenu.module.css";
import list from "../../list";
import tabs from "../../tabs";
import TabLinks from "./TabLinks";
import BreakFast from "./BreakFast";
import Salads from "./Salads";
import MeatFish from "./MeatFish";
import Soups from "./Soups";
import Desserts from "./Desserts";
import Drinks from "./Drinks";
const GalleryMenu = () => {
  // const toggle = () => {};

  const tab = tabs.map((el) => {
    return <TabLinks key={el.id} el={el} />;
  });
  return (
    <section className={style.menu__gallery}>
      <h3 className={style.gallery__heading}>Browse</h3>
      <h2 className={style.gallery__main}>Our Categorised Gallery</h2>
      <nav className={style.nav__tab}>{tab}</nav>
      <BreakFast key={list[1]} data={list[0].breakfast} />
      <Salads key={list[2]} data={list[1].salads} />
      <MeatFish key={list[3]} data={list[2].meatfish} />
      <Soups key={list[4]} data={list[3].soups} />
      <Desserts key={list[5]} data={list[4].desserts} />
      <Drinks key={list[6]} data={list[5].drinks} />
      <div className={style.btn__container}>
        <button className={style.gallery__btn}>See All</button>
      </div>
    </section>
  );
};

export default GalleryMenu;
