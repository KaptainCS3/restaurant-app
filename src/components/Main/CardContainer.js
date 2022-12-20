import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from "../../style/cardcontainer.module.css";
import Card from "./Card";
// import Paging from "./Paging";
const CardContainer = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    alert(carousel.current.scrollWidth)
    console.log(carousel.current);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className={style.feature__food}>
      <div className={style.wrapper}>
        <h3 className={style.explore}>Explore</h3>
        <div className={style.food__container}>
          <h2 className={style.food__heading}>Our Featured Food</h2>
          {/* <Paging /> */}
        </div>
      </div>

      <motion.div className={style.carousel} ref={carousel}>
        <motion.div
          className={style.inner__carousel}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          <motion.div
            className="flex flex-row justify-between"
            style={{ paddingLeft: "5%" }}
          >
            <Card img="image1.jpg" />
            <Card img="image2.jpg" />
            <Card img="image3.jpg" />
            <Card img="image4.jpg" />
            <Card img="image5.jpg" />
            <Card img="image6.jpg" />
            <Card img="image7.jpg" />
            <Card img="image8.jpg" />
            <Card img="image9.jpg" />
            <Card img="image10.jpg" />
            {/* <Card img="image11.jpg" /> */}
            {/* <Card img="image12.jpg" /> */}
            {/* <Card img="image13.jpg" /> */}
            {/* <Card img="image14.jpg" /> */}
            {/* <Card img="image15.jpg" /> */}
            {/* <Card img="image16.jpg" /> */}
            {/* <Card img="image17.jpg" /> */}
          </motion.div>
        </motion.div>
      </motion.div>
      {/* <div className={style.carousel}>
  
          <Card img="pexels-steve-3789885.jpg"/>
          <Card img="pexels-steve-3789885.jpg"/>
          <Card img="pexels-steve-3789885.jpg"/>
          <Card img="pexels-steve-3789885.jpg"/>
          <Card img="pexels-steve-3789885.jpg"/>
          <Card img="pexels-steve-3789885.jpg"/>
          <Card img="pexels-steve-3789885.jpg"/>
          <Card img="pexels-steve-3789885.jpg"/>
          <Card img="pexels-steve-3789885.jpg"/>
          <Card img="pexels-steve-3789885.jpg"/>
        </div>
        <div
          className="flex flex-row "
          style={{ padding: "2% 5%" }}
        >
          <Card img="pexels-nishant-aneja-2955819.jpg" />
          <Card img="pexels-rajesh-tp-1633578.jpg" />
          {/* <Card img="pexels-steve-3789885.jpg"/> */}
      {/* </div> */}
      {/* </div> */}
      {/* <Card img="pexels-rajesh-tp-1633578.jpg"/> */}
    </section>
  );
};

export default CardContainer;
