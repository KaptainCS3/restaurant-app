import React from "react";
import style from "../../style/cardcontainer.module.css";
import Card from "./Card";
import data from "../../data";
import Paging from "./Paging";
const CardContainer = () => {
  const cardData = data.map((el) => {
    return <Card key={el.id} dataPassed={el} />;
  });
  return (
    <section className={style.feature__food}>
      <h3 className={style.explore}>Explore</h3>
      <div className={style.food__container}>
        <h2 className={style.food__heading}>Our Featured Food</h2>
        <Paging />
      </div>
      <div className={style.food__container__list}>
      {cardData}
      </div>
    </section>
  );
};

export default CardContainer;
