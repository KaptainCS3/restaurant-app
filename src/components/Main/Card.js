import React from 'react'
import style from "../../style/card.module.css"
import data from "../../data.js";
const Card = (props) => {
    console.log(props)
  return (
        <div className={style.food__container__list}>
          <div className={style.food__content}>
            <div className={style.dish__img}>
                <img src={props.data} alt="content" />
            </div>
            <div className={style.food__description}>
              <div className={style.name__rate}>
                <p className={style.dish__name}></p>
              </div>
              <button className={style.order__now__btn}></button>
            </div>
          </div>
          <div className={style.food__content}>
            <div className={style.dish__img}></div>
            <div className={style.food__description}>
              <div className={style.name__rate}>
                <p className={style.dish__name}></p>
              </div>
              <button className={style.order__now__btn}></button>
            </div>
          </div>
          <div className={style.food__content}>
            <div className={style.dish__img}></div>
            <div className={style.food__description}>
              <div className={style.name__rate}>
                <p className={style.dish__name}></p>
              </div>
              <button className={style.order__now__btn}></button>
            </div>
          </div>
          <div className={style.food__content}>
            <div className={style.dish__img}></div>
            <div className={style.food__description}>
              <div className={style.name__rate}>
                <p className={style.dish__name}></p>
              </div>
              <button className={style.order__now__btn}></button>
            </div>
          </div>
        </div>
    
  );
}

export default Card