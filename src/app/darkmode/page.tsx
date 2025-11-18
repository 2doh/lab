"use client";

import { useThemeStore } from "@/store/useThemeStore";

const page = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="flex-center flex-col h-[46.8vw]">
      {/* input checkbox를 숨기고 label을 이용해 토글 스위치 모양 구현 */}
      <label className="cursor-pointer group aspect-[500/200] max-w-[40%] w-[100%]">
        {/* 토글 체크박스 */}
        {/* sr-only 클래스로 input 숨김 */}
        <input
          type="checkbox"
          className="sr-only"
          // 새로고침 시 다크모드가 true면 스위치 이동
          checked={theme === true}
          onChange={() => setTheme()}
        />
        {/* 스위치 배경 */}
        <div
          className="w-full h-full bg-lightgray rounded-full relative
          group-has-[input:checked]:bg-dark-surface transition-colors duration-500
          shadow-[inset_1px_3px_5px_rgba(18,18,18,0.6),inset_0px_0px_5px_rgba(18,18,18,0.1)]
          group-has-[input:checked]:shadow-[inset_1px_3px_5px_rgba(224,224,224,0.6),inset_0px_0px_5px_rgba(224,224,224,0.1)]
          "
        >
          {/* 스위치 버튼 */}
          <div
            className="absolute top-[50%] left-[4.5%] translate-y-[-50%]
            rounded-full h-[100%] max-h-[80%] aspect-square
            transition-all duration-500 bg-amber-400
            group-has-[input:checked]:left-[63%]
            group-has-[input:checked]:bg-shadow
            "
          />
          <div
            className="h-[60%] z-[50] absolute top-[50%]
          translate-y-[-50%] left-[8.5%]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
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
          <div
            className="h-[60%] z-[50] absolute right-[8.5%] top-[50%]
        translate-y-[-50%]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
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
