import React from "react";
import style from "../../style/book.module.css"
const Book = () => {
  return (
    <section className={style.book}>
      <h3></h3>
      <h2></h2>
      <form>
        <label htmlFor="date">Date</label>
        <input type="date" id="date"/>
        <label htmlFor="time">Time</label>
        <input type="time" id="time"/>
        <label htmlFor="guest">Guest</label>
        <input type="text" id="guest"/>
      </form>
      <button className={style.available__btn}></button>
    </section>
  );
};

export default Book;
