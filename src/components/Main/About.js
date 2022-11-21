import React from 'react'
import style from "../../style/about.module.css"
const About = () => {
  return (
    <section className={style.welcome__container}>
      <div className={style.container__left}></div>
      <div className={style.container__right}>
        <h4 className={style.title__heading}>Welcome</h4>
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
        <button className={style.direction}>Get Direction &gt;</button>
      </div>
    </section>
  );
}

export default About