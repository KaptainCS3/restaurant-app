import React from 'react'
import style from "../../style/galleryMenu.module.css"
import { Link } from 'react-router-dom'
import GalleryCard from './GalleryCard'
const GalleryMenu = () => {
  return (
    <section className={style.menu__gallery}>
      <h3 className={style.gallery__heading}>Browse</h3>
      <h2 className={style.gallery__main}>Our Categorised Gallery</h2>
      <nav className={style.nav__tab}>
        <Link className={style.gallery__links}>BreakFast</Link>
        <Link className={style.gallery__links}>Salads</Link>
        <Link className={style.gallery__links}>Meat & Fish</Link>
        <Link className={style.gallery__links}>Soups</Link>
        <Link className={style.gallery__links}>Desserts</Link>
        <Link className={style.gallery__links}>Drinks</Link>
      </nav>
      <GalleryCard />
      <div className={style.btn__container}>
      <button className={style.gallery__btn}>fslfsfSee All</button>
      </div>
    </section>
  );
}

export default GalleryMenu