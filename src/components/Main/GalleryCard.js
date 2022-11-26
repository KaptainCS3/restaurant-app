import React from 'react'
import style from "../../style/gallaryCard.module.css"
import list from '../../list'
import variable from "../../assets/images/pizza/pexels-kevin-bidwell-1788852.jpg"
const GalleryCard = () => {
  return (
    <div className={style.gallary__card}>
        <div>
          <img src={variable} alt="description" />
        </div>
        <div>
          <img src={variable} alt="description" />
        </div>
        <div>
          <img src={variable} alt="description" />
        </div>
        <div>
          <img src={variable} alt="description" />
        </div>
    </div>
  )
}

export default GalleryCard