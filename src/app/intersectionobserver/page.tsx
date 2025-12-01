"use client";
import { getDummy } from "@/apis/dummy";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    getDummy();
  }, []);

  return (
    <div className="h-auto p-[10%] bg-amber-50">
      <div className="bg-amber-300 w-[100%] h-[100%]">123</div>
    </div>
  );
};

export default page;
