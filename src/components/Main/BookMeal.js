import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import style from "../../style/book.module.css";
const Book = () => {
  const [bookedMeal, setbookedMeal] = useState({
    dateBooked: "",
    timeBooked: "",
    numGuest: "",
    email: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setbookedMeal((prevBookedMeal) => ({
      ...prevBookedMeal,
      [name]: value,
    }));
  };
  console.log(bookedMeal);
  return (
    <section className={style.book}>
      <h3 className={style.heading}>Let's </h3>
      <h2 className={style.sub__headingx}>Book a Table</h2>
      <form className={style.form__container}>
        <div className={style.form__control}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            className={style.form__input}
            name="dateBooked"
            onChange={handleChange}
            value={bookedMeal.dateBooked}
          />
        </div>
        <div className={style.form__control}>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            className={style.form__input}
            name="timeBooked"
            onChange={handleChange}
            value={bookedMeal.timeBooked}
          />
        </div>
        <div className={style.form__control}>
          <label htmlFor="guest">Guest</label>
          <input
            type="number"
            min="1"
            id="guest"
            className={style.form__input}
            name="numGuest"
            onChange={handleChange}
            value={bookedMeal.numGuest}
          />
        </div>
        <div className={style.form__control}>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            className={style.form__input}
            name="email"
            onChange={handleChange}
            value={bookedMeal.email}
          />
        </div>
      </form>
      <button type="submit" className={style.available__btn}>
        Check Availability <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </section>
  );
};

export default Book;
