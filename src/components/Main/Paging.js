import React from 'react'
import style from "../../style/cardcontainer.module.css";
const Paging = () => {
  return (
    <div className={style.food__paging}>
      <div className={style.list__left}>&lt;</div>
      <div className={style.list__right}>&gt;</div>
    </div>
  );
}

export default Paging