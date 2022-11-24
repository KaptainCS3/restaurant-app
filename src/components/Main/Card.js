import React from "react";
import style from "../../style/card.module.css";
import star from "../../assets/rating_star.png";
const Card = (props) => {
  return (
    <div className={style.food__content}>
      <div className={style.dish__img}>
        <img
          src={require(`../../assets/images/salade${props.dataPassed.dish_image}`)}
          alt="content"
          className={style.image__dish}
        />
      </div>
      <div className={style.food__description}>
        <div className={style.name__rate}>
          <p className={style.dish__name}>{props.dataPassed.dish_name}</p>
          <div className={style.rating__star}>
            <img src={star} alt="description rating" />
            <img src={star} alt="description rating" />
            <img src={star} alt="description rating" />
            <img src={star} alt="description rating" />
            <img src={star} alt="description rating" />
            <span>{props.dataPassed.rating}</span>
          </div>
        </div>
        <button className={style.order__now__btn}>&gt;</button>
      </div>
    </div>
  );
};

export default Card;
