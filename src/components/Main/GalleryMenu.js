import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../../style/galleryMenu.module.css";
import tabs from "../../tabs";
import TabLinks from "./TabLinks";
const GalleryMenu = () => {
  const [tab, setTab] = useState(tabs);

  const mapTab = tab.map((elMap) => {
    return <Link key={elMap.id}>{elMap.links}</Link>;
  });
  return (
    <section className={style.menu__gallery}>
      <h3 className={style.gallery__heading}>Browse</h3>
      <h2 className={style.gallery__main}>Our Categorised Gallery</h2>
      <nav className={style.nav__tab}>{mapTab}</nav>
      <div className={style.btn__container}>
        <button className={style.gallery__btn}>See All</button>
      </div>
    </section>
  );
};

export default GalleryMenu;
