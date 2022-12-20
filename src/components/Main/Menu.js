import style from '../../style/menu.module.css';
const Menu = (props) => {
  return (
    <div className={style.menu__item}>
      <h4 className={style.discover__sub}>{props.element.heading}</h4>
      <p className={style.para__1}>{props.element.paragraph1}</p>
      <small className={style.small__1}>{props.element.small1}</small>
      <p className={style.para__2}>{props.element.paragraph2}</p>
      <small className={style.small__2}>{props.element.small2}</small>
    </div>
  );
}

export default Menu