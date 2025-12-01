"use client";
import CardFrame from "@/components/common/CardFrame";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import cardData from "../apis/cards.json";

const page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const router = useRouter();
  return (
    <div
      className="relative h-[46.8vw] max-h-[80vh]
      flex-center flex-col transition-all duration-100 ease-in"
    >
      <Swiper
        className="w-full h-[66.67vw] max-h-[80%]"
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={0}
        onSlideChange={swiper => setCurrentIndex(swiper.realIndex)}
        onSwiper={swiper => (swiperRef.current = swiper)}
      >
        {cardData.map((item, index) => {
          const total = cardData.length;
          const diff = Math.min(
            Math.abs(currentIndex - index),
            total - Math.abs(currentIndex - index),
          );
          return (
            <SwiperSlide
              key={index}
              style={{
                transform:
                  diff === 0
                    ? "scale(1)"
                    : diff === 1
                      ? "scale(0.8)"
                      : "scale(0.6)",
                transition: "transform 0.3 ease-in",
                cursor: "pointer",
              }}
              onClick={() => {
                router.push(item.address);
              }}
            >
              <CardFrame {...item}></CardFrame>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        className="absolute z-50 top-[50%] right-[1%] translate-y-[-50%] h-[8%] cursor-pointer"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-darkgray transition-colors duration-200 w-full h-full
          dark:text-light"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            className="fill-light dark:fill-dark-surface"
          />
          <path d="m10 8 4 4-4 4" />
        </svg>
      </button>
      <button
        className="absolute z-50 top-[50%] left-[1%] translate-y-[-50%] h-[8%] cursor-pointer"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-darkgray transition-colors duration-200 w-full h-full
          dark:text-light"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            className="fill-light dark:fill-dark-surface"
          />
          <path d="m14 16-4-4 4-4" />
        </svg>
      </button>
    </div>
  );
};
export default page;
