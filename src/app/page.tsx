"use client";
import CardFrame from "@/components/common/CardFrame";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import cardData from "../apis/cards.json";
import { useState } from "react";
import { Pagination } from "swiper/modules";

const page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="h-[46.8vw] max-h-[80vh] flex-center flex-col transition-all duration-100 ease-in">
      <Swiper
        className="w-full h-[66.67vw] max-h-[80%] bg-highlight "
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={0}
        onSlideChange={swiper => setCurrentIndex(swiper.realIndex)}
      >
        {cardData.map((item, index) => {
          const total = cardData.length;
          const diff = Math.min(
            Math.abs(currentIndex - index),
            total - Math.abs(currentIndex - index),
          );
          return (
            <SwiperSlide
              className="bg-amber-200"
              key={index}
              style={{
                transform:
                  diff === 0
                    ? "scale(1)"
                    : diff === 1
                      ? "scale(0.8)"
                      : "scale(0.6)",
                transition: "transform 0.3 ease-in",
              }}
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
