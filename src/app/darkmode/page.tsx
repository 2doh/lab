import React from "react";

const page = () => {
  return (
    <div
      className="flex-center flex h-[46.8vw] max-h-[80vh]  
      transition-all duration-100 ease-in"
    >
      {/* input checkbox를 숨기고 label을 이용해 토글 스위치 모양 구현 */}
      <label
        className="cursor-pointer group
        w-full h-full max-w-[500px] max-h-[200px]"
      >
        {/* 토글 체크박스 */}
        {/* sr-only 클래스로 input 숨김 */}
        <input type="checkbox" className="sr-only" />
        {/* 스위치 배경 */}
        <div
          className="w-full h-full bg-lightgray rounded-full
          group-has-[input:checked]:bg-dark-surface transition-colors duration-500
          relative shadow-[inset_1px_3px_5px_rgba(0,0,0,0.6),inset_0px_0px_5px_rgba(0,0,0,0.1)]
          "
        >
          {/* 스위치 버튼 */}
          <div
            className="absolute top-[50%] left-[5%] translate-y-[-50%]
            w-[30%] h-[75%] rounded-full
            transition-transform transform duration-500
            flex flex-center bg-amber-400
            group-has-[input:checked]:translate-x-[200%]
            "
          ></div>
          <div className="absolute h-[60%] top-[50%] translate-y-[-50%] left-[7.8%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-full h-full stroke-dark-surface
              group-has-[input:checked]:stroke-darkgray
              "
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </div>
          <div className="absolute h-[60%] top-[50%] translate-y-[-50%] right-[7.8%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-full h-full stroke-darkgray
              group-has-[input:checked]:stroke-dark-surface"
            >
              <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
            </svg>
          </div>
        </div>
      </label>
    </div>
  );
};

export default page;
