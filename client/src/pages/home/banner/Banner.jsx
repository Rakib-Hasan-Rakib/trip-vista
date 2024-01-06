import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Navigation,
  Thumbs,
  EffectFade,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./banner.css";
import BannerText from "./BannerText";

const Bannner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, EffectFade, Autoplay]}
        effect={"fade"}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/yVwMNMX/tiger.jpg" />
          <div className="overlay">
            <div className="md:basis-2/3">
              <BannerText
                title="Roar with Tigers"
                desc="Explore the wilderness. Sundarbans: world's largest mangrove forest, teeming with unique wildlife and breathtaking landscapes."
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/ftY6QpY/beach.jpg" />
          <div className="overlay">
            <div className="md:basis-2/3">
              <BannerText
                title="sun sand sea"
                desc="Golden Sands Beckon: Cox's Bazar, Bangladesh. Discover Asia's longest beach and vibrant coastal charm."
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/FbLGrLk/waterfall.jpg" />
          <div className="overlay">
            <div className="md:basis-2/3">
              <BannerText
                title="Feel the fall"
                desc="Nature's Cascade Marvels: Bandarban's Enchanting Waterfalls. Immerse in the beauty of pristine cascades amidst lush greenery."
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/dGV9MrS/lake.jpg" />
          <div className="overlay">
            <div className="md:basis-2/3">
              <BannerText
                title="Like the Lake?"
                desc="Tranquil Haor and Lakes: Bangladesh's Natural Treasures. Serene expanses offering biodiversity and picturesque landscapes."
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/yVwMNMX/tiger.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/ftY6QpY/beach.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/FbLGrLk/waterfall.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/dGV9MrS/lake.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Bannner;
