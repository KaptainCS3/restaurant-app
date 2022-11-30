import React from 'react'
import style from "../../style/desserts.module.css";
const Salads = (props) => {
  const salad = props.data.images.map((el) => {
    return <img src={require(`../../assets/images/salade/pexels-polina-tankilevitch-4519053.jpg`)} alt="image-description" />
  });
  return <div className={style.div}>{salad}</div>;
};

export default Salads