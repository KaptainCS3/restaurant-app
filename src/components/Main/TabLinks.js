import { Link } from "react-router-dom";
import style from "../../style/galleryMenu.module.css";
import tabs from "../../tabs"
const TabLinks = (props) => {
  const mapTabs = tabs.map(el =>{
   return <Link className={style.gallery__links}>{el.links}</Link>
  })
  return {mapTabs}
};

export default TabLinks;
