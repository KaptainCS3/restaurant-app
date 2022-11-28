import React from 'react'
import style from "../../style/customerCard.module.css"
const CustomerCard = () => {
  return (
    <div className={style.card__customer}>
        <div className={style.avarta__rate}>
            {/* <img src={} alt="customer avarta"/> */}
        </div>
        <p className={style.description}>
            
        </p>
        <div className={style.rating__name}>
            <div className={style.rating}></div>
            <h5 className={style.avarta__name}></h5>
        </div>
    </div>
  )
}

export default CustomerCard