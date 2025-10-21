import { cardDataInterface } from "@/interface/cardDataInterface";
import React from "react";

const CardFrame = (data: cardDataInterface) => {
  return (
    <div
      // className={`w-full h-full relative bg-${data.color}`}
      className=" h-full relative"
      style={{ backgroundColor: `var(--color-${data.color})` }}
    >
      <span className="absolute top-[50%] left-[5%] bg-amber-50 text-darkgray text-[50px] font-bold">
        #{data.id}
      </span>
    </div>
  );
};

export default CardFrame;
