import React from 'react'
import style from "../../style/cardcontainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Paging = () => {
  return (
    <div className={style.food__paging}>
      <div className={style.list__left}><FontAwesomeIcon icon={faArrowLeft} /></div>
      <div className={style.list__right}><FontAwesomeIcon icon={faArrowRight}/> </div>
    </div>
  );
}

export default Paging