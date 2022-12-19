import React, { useState } from "react";
import style from "../../style/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const [newsMail, setNewsMail] = useState({
    emailSub: "",
  });
  console.log(newsMail);
  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    setNewsMail((prevEmail) => ({
      ...prevEmail,
      [name]: value,
    }));
  };
  return (
    <footer className={style.footer__container}>
      <h1 className={style.hero__footer}>
        <span>The</span> Kapstro
      </h1>
      <section className={style.footer__main}>
        <div className={style.about}>
          <h2 className={style.sub__heading}>About us</h2>
          <p className={style.description}>
            Sed ut perspicialis unde omnis iste natus error sit vluptatem
            accusan0tium doloremque laudantium, totam rem aperiam,
          </p>
        </div>
        <div className={style.subscribe}>
          <h2 className={style.sub__heading}>Get News & Offers</h2>
          <form className={style.submit__offer}>
            <input
              className={style.email}
              placeholder="Enter your email"
              id="email_offers"
              onChange={handleChange}
              type="email"
              name="emailSub"
              value={newsMail.emailSub}
            />
            <button className={style.btn__submit}>
              <FontAwesomeIcon icon={faArrowRight} style={{ color: "#fff" }} />
            </button>
          </form>
        </div>
        <div className={style.contact}>
          <h2 className={style.sub__heading}>Contact For Offers</h2>
          <div className={style.locations}>
            <p className={style.content}>
              677 Main Drive
              <br />
              North Canton, OH 44720
            </p>
            <p className={style.content}>
              +00 123 456 7890
              <br />
              www.Kapstro.com
            </p>
            <p className={style.content}>
              Monday - Wednesday
              <br />
              7:00 - 9:00PM
            </p>
            <p className={style.content}>
              Wednesday - Sunday
              <br />
              8:00 - 10:30PM
            </p>
          </div>
        </div>
      </section>
      <div className={style.copyright}>
        <p className={style.copyright__text}>
          Copyright Reserve 2022 KaptainCS3
        </p>
      </div>
    </footer>
  );
};

export default Footer;
