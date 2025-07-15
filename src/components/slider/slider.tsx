import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "./slider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import cupBrown from "./cup-brown.png";
import cupKhaki from "./cup-khaki.png";
import cupGreen from "./cup-green.png";

import SliderCard from "./slider-card";

export default function Slider() {
  return (
    <div className="slider-section">
      <div className="slider-wrapper">
        <div className="custom-nav-prev"></div>
        <Swiper
          modules={[Navigation, Autoplay, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation={{
            prevEl: ".custom-nav-prev",
            nextEl: ".custom-nav-next",
          }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          scrollbar={{ draggable: true }}
          className="slider-custom"
        >
          <SwiperSlide className="slider-frame">
            <SliderCard
              image={cupBrown}
              title={"Cappucino"}
              description={"Our cafe will serve you quickly"}
            />
          </SwiperSlide>
          <SwiperSlide className="slider-frame">
            <SliderCard
              image={cupKhaki}
              title={"Latte"}
              description={"Our cafe will serve you quickly"}
            />
          </SwiperSlide>
          <SwiperSlide className="slider-frame">
            <SliderCard
              image={cupGreen}
              title={"Lungo"}
              description={"Our cafe will serve you quickly"}
            />
          </SwiperSlide>
          <SwiperSlide className="slider-frame">
            <SliderCard
              image={cupBrown}
              title={"Cappucino"}
              description={"Our cafe will serve you quickly"}
            />
          </SwiperSlide>
          <SwiperSlide className="slider-frame">
            <SliderCard
              image={cupKhaki}
              title={"Latte"}
              description={"Our cafe will serve you quickly"}
            />
          </SwiperSlide>
          <SwiperSlide className="slider-frame">
            <SliderCard
              image={cupGreen}
              title={"Lungo"}
              description={"Our cafe will serve you quickly"}
            />
          </SwiperSlide>
        </Swiper>
        <div className="custom-nav-next"></div>
      </div>
    </div>
  );
}
