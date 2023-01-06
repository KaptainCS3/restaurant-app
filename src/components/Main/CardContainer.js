import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from "../../style/cardcontainer.module.css";
import Card from "./Card";
// import Paging from "./Paging";
const CardContainer = () => {
  const [width, setWidth] = useState(0);
  // const carousel = useRef();

  // useEffect(() => {
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);

  return (
    <section className={style.feature__food}>
      <div className={style.wrapper}>
        <h3 className={style.explore}>Explore</h3>
        <div className={style.food__container}>
          <h2 className={style.food__heading}>Our Featured Food</h2>
          {/* <Paging /> */}
        </div>
      </div>
    </section>
  );
};

{/* <Card img="image1.jpg" />
<Card img="image2.jpg" />
<Card img="image3.jpg" />
<Card img="image4.jpg" />
<Card img="image5.jpg" />
<Card img="image6.jpg" />
<Card img="image7.jpg" />
<Card img="image8.jpg" />
<Card img="image9.jpg" />
<Card img="image10.jpg" /> */}
export default CardContainer;
