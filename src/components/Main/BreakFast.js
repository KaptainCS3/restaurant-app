import React from 'react'
import style from "../../style/desserts.module.css";
const BreakFast = (props) => {
  const salad = props.data.images.map((el) => {
    return (
      <img
        src={require(`../../assets/images/breakfast/pexels-gerald-jake-abangan-2689421.jpg`)}
        alt="image-description"
      />
    );
  });
  return <div className={style.div}>{salad}</div>;
};

export default BreakFast