import React from "react";
import { Link } from "react-router-dom";
import style from "../../style/galleryMenu.module.css";
const TabLinks = (props) => {
  return <Link className={style.gallery__links}>{props.el.links}</Link>;
};

export default TabLinks;
