import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex-center gap-10 h-[100vh] w-[100vw]">
      <span
        className="w-[5vw] h-[5vw] bg-darkgray rounded-full animate-dot"
        style={{ animationDelay: "0s" }}
      />
      <span
        className="w-[5vw] h-[5vw] bg-darkgray rounded-full animate-dot"
        style={{ animationDelay: "0.2s" }}
      />
      <span
        className="w-[5vw] h-[5vw] bg-darkgray rounded-full animate-dot"
        style={{ animationDelay: "0.4s" }}
      />
    </div>
  );
}
