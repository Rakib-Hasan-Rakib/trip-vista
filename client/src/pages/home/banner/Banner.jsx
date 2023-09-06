import React from "react";
import "./Banner.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "../../../components/image/Image";
import Container from "../../../components/Container";

const Banner = () => {
  return (
    <>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper h-[80vh] my-4"
        >
          <SwiperSlide>
            <Image source="https://i.ibb.co/1MnCzSW/sundarban.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image source="https://i.ibb.co/YjJcFrR/bisnakandi.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image source="https://i.ibb.co/NVr8XBH/ahsan-monjil.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image source="https://i.ibb.co/DbtdCzd/rangamati.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            <Image source="https://i.ibb.co/2hMDZbQ/md-sameul-9-Uqze-QYk-Cgg-unsplash.jpg" />
          </SwiperSlide>
        </Swiper>
    </>
  );
};

export default Banner;
