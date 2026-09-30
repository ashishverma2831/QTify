import { useEffect } from "react";
import styles from "./Carousel.module.css";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import LeftArrowButton from "./LeftNavigationButton/LeftArrowButton";
import RightArrowButton from "./RightNavigationButton/RightArrowButton";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data, swiper]);
  return null;
};

function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        spaceBetween={10}
        slidesPerView="auto"
        style={{ padding: "0px 20px" }}
        allowTouchMove
      >
        <Controls data={data} />
        <RightArrowButton />
        <LeftArrowButton />
        {data.map((ele) => (
          <SwiperSlide key={ele.id}>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;