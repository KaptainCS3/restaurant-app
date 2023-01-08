import React, { useState } from "react";
import people from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import style from "../../style/customerCard.module.css"

const CustomerCard = () => {
  // The review is same as a carousel you know in css and normal js
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  // This function helps us check and make sure we dont go above the lenght of our array and below its lenght
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) return people.length - 1;
    return number;
  };

  // This function help us in moving to the previous element
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      // if(newIndex < 0)
      // newIndex = 3
      // checkNumber(newIndex)
      return checkNumber(newIndex);
    });
  };

  // This function help us in moving to the next element
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      // if(newIndex > people.length -1)
      // newIndex = 0
      // checkNumber(newIndex)
      return checkNumber(newIndex);
    });
  };

  // in this function , we use the random object to generate random numbers so we can get random images within our range
  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkNumber(randomIndex));
    // return randomIndex
  };
  return (
    <>
      <article className={style.review}>
        <div className={style.img__container}>
          <img src={image} alt={name} className={style.person__img} />
          <span className={style.quote__icon}>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </div>
        <h4 className={style.author}>{name}</h4>
        <p className={style.job}>{job}</p>
        <p className={style.info}>{text}</p>
        <div className={style.button__container}>
          <button className={style.prev__btn} onClick={prevPerson}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className={style.random__btn} onClick={randomPerson}>
            suprise me
          </button>
          <button className={style.next__btn} onClick={nextPerson}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </article>
    </>
  );
};


  export default CustomerCard