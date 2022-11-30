import React from 'react'
import style from "../../style/desserts.module.css";
const Soups = (props) => {
  const salad = props.data.images.map((el) => {
    return (
      <img
        src={require(`../../assets/images/desserts/pexels-alexander-grey-1191639.jpg`)}
        alt="image-description"
      />
    );
  });
  return <div className={style.div}>{salad}</div>;
}

export default Soups