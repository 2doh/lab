import { cardDataInterface } from "@/interface/cardDataInterface";
import React, { useState } from "react";
import "../../styles/css/text.css";

const CardFrame: React.FC<cardDataInterface> = data => {
  // data.color에 따라 배경색 클래스를 바꾸고 싶으나
  // 테일윈드는 빌드 시 템플릿 문자열에 동적 값을 넣으면 css를 생성하지 않음
  // 따라서 data.color값을 매핑하여 bg값을 일대일 대응시킴
  // Record<string, string> : 키와 값 모두 문자열인 객체 타입
  const colorMap: Record<string, string> = {
    "table-a": "bg-table-a",
    "table-b": "bg-table-b",
    "table-c": "bg-table-c",
    "table-d": "bg-table-d",
    "table-e": "bg-table-e",
  };
  const bgColorClass = colorMap[data.color] ?? "bg-light";

  return (
    <div className={`h-full relative ${bgColorClass}`}>
      <div className="flex flex-col absolute bottom-[10%] w-[60%] left-[5%]">
        <span className="font-bold card-text lg:text-[clamp(1.2rem,(1.5vw+0.8rem),3rem)] sm:text-[clamp(0.8rem,(1vw+0.8rem),2rem)] text-[clamp(0.5rem,(0.5vw+0.5rem),1rem)]">
          #{data.id}
        </span>
        <span className="font-bold card-text lg:text-[clamp(1.2rem,(1.5vw+0.8rem),3rem)] sm:text-[clamp(0.8rem,(1vw+0.8rem),2rem)] text-[clamp(0.5rem,(0.5vw+0.5rem),1rem)]">
          {data.title}
        </span>
        <span className="card-text lg:text-[clamp(1rem,(1vw+1rem),1.5rem)] sm:text-[clamp(0.8rem,(0.8vw+0.8rem),1rem)] text-[clamp(0.5rem,(0.5vw+0.5rem),0.8rem)]">
          {data.contentstype}
        </span>
      </div>
    </div>
  );
};

export default CardFrame;
