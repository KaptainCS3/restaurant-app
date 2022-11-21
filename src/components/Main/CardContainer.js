import React from 'react'
import style from "../../style/cardcontainer.module.css"
import Card from './Card';
const CardContainer = () => {
  return (
    <section className={style.feature__food}>
      <h3 className={style.explore}>Explore</h3>
      <div className={style.food__container}>
        <h2 className={style.food__heading}>Our Featured Food</h2>
        <div className={style.food__paging}>
          <div className={style.list__left}>&lt;</div>
          <div className={style.list__right}>&gt;</div>
        </div>
      </div>
      <Card />
    </section>
  );
}

export default CardContainer