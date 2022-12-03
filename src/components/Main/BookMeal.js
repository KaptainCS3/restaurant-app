import React from "react";
import style from "../../style/book.module.css"
const Book = () => {
  return (
    <section className={style.book}>
      <h3>Let's </h3>
      <h2>Book a Table</h2>
      <form className={style.form__container}>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" className={style.form__input}/>
        <label htmlFor="time">Time</label>
        <input type="time" id="time" className={style.form__input}/>
        <label htmlFor="guest">Guest</label>
        <input type="text" id="guest" className={style.form__input}/>
        <input type="email" placeholder="Enter your email" id="email"  className={style.form__input}/>
      </form>
      <button className={style.available__btn}></button>
    </section>
  );
};

export default Book;
