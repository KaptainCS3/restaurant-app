import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import style from "../style/nav.module.css";
const Nav = () => {
  return (
    // { /*Nav component * /}
    <nav className={style.nav__container}>
      {/* Nav logo section */}
      <div className={style.nav__logo}>
        <h1>
          <span>The</span> Kapstro
        </h1>
      </div>

      {/*Nav links section */}
      <div className={style.nav__bar}>
        <Link className={style.nav__links}>Home</Link>
        <Link className={style.nav__links}>Menu</Link>
        <Link className={style.nav__links}>Specialties</Link>
        <Link className={style.nav__links}>Reservation</Link>
        <Link className={style.nav__links}>Contact</Link>
        <Link className={style.nav__links}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={style.icon} />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
