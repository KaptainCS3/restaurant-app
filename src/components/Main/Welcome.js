import style from "../../style/welcome.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import Fade from "react-reveal"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Welcome = () => {
  return (
    <Fade bottom>
      <main>
        <section className={style.LandingPage}>
          {/*content and hero section */}

          <div className={style.left__container}>
            <h3 className={style.welcome__text}>Discover your taste</h3>
            <h1 className={style.hero__text}>Eat healthy and Natural Food</h1>
            <button className={style.btn__discover}>
              Discover Menu <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          {/* image container */}
          <div className={style.right__container}></div>
          {/* play button section */}
          <div className={style.btn__play}>
            <button className={style.inner__btn__play}></button>
          </div>
          {/* arrow indicator section */}
          <div className={style.arrow__indicator}>
            <div className={style.arrow__left}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className={style.arrow__right}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          {/* social icon section */}
          <div className={style.social__icons}>
            <div className={style.icons__container}>
              <FontAwesomeIcon icon={faTwitter} className={style.icons} />
            </div>

            <div className={style.icons__container}>
              <FontAwesomeIcon icon={faGooglePlusG} className={style.icons} />
            </div>

            <div className={style.icons__container}>
              <FontAwesomeIcon icon={faFacebookF} className={style.icons} />
            </div>
          </div>
          {/* pagination indicator section  */}
          <div className={style.pagenation__btn}>
            <button className={style.page__btn}></button>
            <button className={style.page__btn}></button>
            <button className={style.page__btn}></button>
            <button className={style.page__btn}></button>
            <button className={style.page__btn}></button>
          </div>
        </section>
      </main>
    </Fade>
  );
};

export default Welcome;

// const Wrapper = styled.div`

// `