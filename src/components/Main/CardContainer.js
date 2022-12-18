import React from "react";
import style from "../../style/cardcontainer.module.css";
import Card from "./Card";
import Paging from "./Paging";
const CardContainer = () => {
  return (
    <section className={style.feature__food}>
      <div className={style.wrapper}>
        <h3 className={style.explore}>Explore</h3>
        <div className={style.food__container}>
          <h2 className={style.food__heading}>Our Featured Food</h2>
          <Paging />
        </div>
      </div>
      <div className="flex flex-row justify-between" style={{ padding: "0 5%" }}>
      <Card img="pexels-nishant-aneja-2955819.jpg"/>
      <Card img="pexels-rajesh-tp-1633578.jpg"/>
      {/* <Card img="pexels-steve-3789885.jpg"/> */}
      </div>
      {/* <Card img="pexels-rajesh-tp-1633578.jpg"/> */}
    </section>
  );
};

export default CardContainer;
