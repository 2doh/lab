"use client";
import CardFrame from "@/components/common/CardFrame";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import cardData from "../apis/cards.json";

const page = () => {
  return (
    <div className="h-[46.8vw] max-h-[80vh] flex-center flex-col bg-red-100 transition-all duration-100 ease-in">
      <Swiper
        className="w-full h-[66.67vw] max-h-[80%] bg-blue-50 "
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        // style={{ transitionTimingFunction: "ease-in-out" }}
      >
        {cardData.map((item, index) => {
          const aaa = () => {
            console.log(item);
          };
          return (
            <SwiperSlide
              className="flex-center"
              key={index}
              onClick={() => aaa()}
            >
              <CardFrame {...item}></CardFrame>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default page;
