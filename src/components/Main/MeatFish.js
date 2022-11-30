import React from 'react'
import style from "../../style/desserts.module.css";
const MeatFish = (props) => {
  const salad = props.data.images.map((el) => {
    return (
      <img
        src={require(`../../assets/images/fish_meat/pexels-airam-datoon-8792899.jpg`)}
        alt="image-description"
      />
    );
  });
  return <div className={style.div}>{salad}</div>;
};

export default MeatFish