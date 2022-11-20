import React from "react";
import style from "../../style/welcome.module.css";
// import bgImg from "../../assets/pexels-valeria-boltneva-1833337.jpg";
const Welcome = () => {
  return (
    <main>
      <section className={style.LandingPage}>
        {/*content and hero section */}
        <div className={style.left__container}>
          <h3 className={style.welcome__text}>Discover your taste</h3>
          <h1 className={style.hero__text}>Eat healthy and Natural Food</h1>
          <button className={style.btn__discover}>Discover Menu &gt;</button>
        </div>
        {/* image container */}
        <div className={style.right__container}></div>
        {/* play button section */}
        <div className={style.btn__play}>
          <button className={style.inner__btn__play}></button>
        </div>
        {/* arrow indicator section */}
        <div className={style.arrow__indicator}>
          <div className={style.arrow__left}>&lt;</div>
          <div className={style.arrow__right}>&gt;</div>
        </div>
        {/* social icon section */}
        <div className={style.social__icons}>
          <div className={style.icons__container}></div>
          <div className={style.icons__container}></div>
          <div className={style.icons__container}></div>
        </div>
        {/* pagination indicator section  */}
        <div className={style.pagenation__btn}>
          <button className={style.page__btn}></button>
          <button className={style.page__btn}></button>
          <button className={style.page__btn}></button>
          <button className={style.page__btn}></button>
          <button className={style.page__btn}></button>
        </div>
      </section>
      <section className={style.welcome__container}>
        <div className={style.container__left}></div>
        <div className={style.container__right}>
          <h4 className={style.title__heading}>Welcom</h4>
          <h2 className={style.main__header}>About Restro</h2>
          <p className={style.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero
            incidunt facere. At ab, fugiat earum odit voluptate dolor sed quas
            voluptates perspiciatis aspernatur! Quod fuga nulla culpa?
            Voluptatibus, dolores.
          </p>
          <p className={style.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero
            incidunt facere. At ab, fugiat earum odit voluptate dolor sed quas
            voluptates perspiciatis aspernatur! Quod fuga nulla culpa?
            Voluptatibus, dolores.
          </p>
          <button className={style.direction}>
            Get Direction &gt;
          </button>
        </div>
      </section>
    </main>
  );
};

export default Welcome;
