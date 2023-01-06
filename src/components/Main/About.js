import style from "../../style/about.module.css";
import Slide from "react-reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <section className={style.welcome__container}>
      <Slide left>
        <div className={style.container__left}></div>
      </Slide>
      <Slide right>
      <div className={style.container__right}>
        <h4 className={style.title__heading}>Welcome</h4>
        <h2 className={style.main__header}>About Restro</h2>
        <p className={style.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero
          incidunt facere. At ab, fugiat earum odit voluptate dolor sed quas
          voluptates perspiciatis aspernatur! Quod fuga nulla culpa?
          Voluptatibus, dolores.
        </p>
        <p className={style.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero
          incidunt facere. At ab, fugiat earum odit voluptate dolor sed quas
          voluptates perspiciatis aspernatur! Quod fuga nulla culpa?
          Voluptatibus, dolores.
        </p>

        <button className={style.direction}>
          Get Direction <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      </Slide>
    </section>
  );
};

export default About;
