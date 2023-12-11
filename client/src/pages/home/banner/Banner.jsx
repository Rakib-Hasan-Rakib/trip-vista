import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import tiger from '../../../assets/videos/tiger.mp4'
import waterfall from "../../../assets/videos/waterfall.mp4";
import hill from "../../../assets/videos/hill.mp4";
import BannerText from "./BannerText";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mb-2 rounded-lg h-full"
      >
        <SwiperSlide className=" relative">
          <video autoPlay loop muted className="h-[100%] w-full">
            <source src={tiger} type="video/mp4" />
          </video>
          <div className="banner-text bg-black bg-opacity-70 h-full w-full absolute top-0 left-0">
            <BannerText
              title="Sundarbans Safari"
              subtitle="where nature meets adventure"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <video
            autoPlay
            loop
            muted
            className="background-video w-full h-[100%]"
          >
            <source src={hill} type="video/mp4" />
          </video>
          <div className="banner-text bg-black bg-opacity-50 h-full w-full absolute top-0 left-0">
            <BannerText
              title="Sajek Valley"
              subtitle="where heaven meets earth"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <video
            autoPlay
            loop
            muted
            className="background-video h-[100%] w-full"
          >
            <source src={waterfall} type="video/mp4" />
          </video>
          <div className="banner-text bg-black bg-opacity-50 h-full w-full absolute top-0 left-0">
            <BannerText
              title="Bandarban Waterfall"
              subtitle="nature's liquid poetry"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
