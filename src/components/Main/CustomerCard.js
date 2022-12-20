import React from 'react'
import style from "../../style/customerCard.module.css"
import avarta_1 from "../../assets/avartas/pexels-daniel-xavier-1239291.jpg"
import avarta_2 from "../../assets/avartas/pexels-pixabay-220453.jpg"
import avarta_3 from "../../assets/avartas/pexels-stefan-stefancik-91227.jpg"
const CustomerCard = () => {
  return (
    <div className={style.card__customer}>
      <div className={style.avarta__rate}>
        <img src={avarta_1} alt="pexel" />
        <div className={style.rating}>adfafdslfsidf</div>
      </div>
      <p className={style.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        voluptate nemo porro voluptas tempore. Est incidunt doloribus ea esse,
        alias excepturi beatae dolore laboriosam modi quam aperiam aliquam quia
        temporibus?.
      </p>
    </div>
  );
}

export default CustomerCard