import React from "react";
import style from "../../style/book.module.css";
const Book = () => {
  return (
    <section className={style.book}>
      <h3 className={style.heading}>Let's </h3>
      <h2 className={style.sub__headingx}>Book a Table</h2>
      <form className={style.form__container}>
        <div className={style.form__control}>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" className={style.form__input} />
        </div>
        <div className={style.form__control}>
          <label htmlFor="time">Time</label>
          <input type="time" id="time" className={style.form__input} />
        </div>
        <div className={style.form__control}>
          <label htmlFor="guest">Guest</label>
          <input type="text" id="guest" className={style.form__input} />
        </div>
        <div className={style.form__control}>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            className={style.form__input}
          />
        </div>
      </form>
      <button type="submit" className={style.available__btn}>Check Availability &gt;</button>
    </section>
  );
};

export default Book;
