import style from "../../style/discover.module.css";
import menu from "../../menu";
import Menu from "../Main/Menu";
const Discover = () => {
  const menuData = menu.map((el) => {
    return <Menu key={el.id} element={el} />;
  });
  return (
    <section className={style.discover__container}>
      <h3 className={style.discover__heading}>Discover</h3>
      <h2 className={style.discover__main}>Our Food Menu</h2>
      <div className={style.discover__menu}>{menuData}</div>
    </section>
  );
};

export default Discover;
