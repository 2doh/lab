import React from "react";

const page = () => {
  return (
    <div
      className="flex-center flex h-[46.8vw] max-h-[80vh]  
      transition-all duration-100 ease-in"
    >
      {/* input checkbox를 숨기고 label을 이용해 토글 스위치 모양 구현 */}
      <label
        className="cursor-pointer 
        w-full h-full max-w-[500px] max-h-[200px]"
      >
        {/* 토글 체크박스 */}
        {/* sr-only 클래스로 input 숨김
        peer 클래스는 상태(checked 등)를 형제 요소에 전달 */}
        <input type="checkbox" className="peer sr-only" />
        {/* 스위치 배경 */}
        <div
          className="w-full h-full bg-darkgray rounded-full
          peer-checked:bg-dark-surface transition-colors duration-500
          relative
          "
        >
          {/* 스위치 버튼 */}
          <div
            className="absolute top-[50%] left-[5%] translate-y-[-50%]
            w-[30%] h-[75%] rounded-full
            transition-transform transform duration-500
            flex flex-center bg-amber-50
            peer-checked:translate-x-10
            "
          ></div>
        </div>
      </label>
    </div>
  );
};

export default page;
