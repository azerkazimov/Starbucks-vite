import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "./slider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SliderCard from "./slider-card";
import { menu } from "@/data/menu";

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
          className="slider-custom"
        >
          {menu.map((coffee) => (
            <SwiperSlide className="slider-frame" key={coffee.name}>
              <SliderCard
                coffee={coffee}
              />
            </SwiperSlide>
          ))}
          
        </Swiper>
        <div className="custom-nav-next"></div>
      </div>
    </div>
  );
}
