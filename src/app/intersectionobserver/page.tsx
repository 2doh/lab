"use client";
import { getDummy } from "@/apis/dummy";
import React, { useEffect, useState } from "react";

export type Product = {
  // 상품정보
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  images: string[];
  thumbnail: string;
  tags: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  weight: number;
  // 가격/재고
  price: number;
  discountPercentage: number;
  stock: number;
  availabilityStatus: string;
  // 품질/평가
  rating: number;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
  }[];
  // 관리
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
};

const page = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await getDummy();
      if (result) {
        setProduct(result.products);
        console.log(result.products);
      }
    };
    getData();
  }, []);

  return (
    <div className="h-auto flex-center">
      <div className="w-[90%] grid gap-1 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] ">
        {product?.map(item => (
          <div
            className=" md:h-[100%] md:max-h-[360px] sm:max-w-[240px] sm:aspect-[260/380] flex flex-col items-center bg-light"
            key={item.id}
          >
            <img
              className=" w-[100%] flex-center bg-lightgray"
              src={item?.images[0]}
              alt="이미지"
            />
            <div className="w-[100%] flex justify-center max-h-[120px]">
              <div className="w-[90%] h-[100%] ">
                <p className="text-[11px] font-bold">{item?.brand}</p>
                <p className="text-[13px]">{item?.title}</p>
                {/* <p>{product?.description}</p> */}
                <div className="flex gap-1 text-[13px] font-bold">
                  <p className="text-error">{item?.discountPercentage}%</p>
                  <p>{item?.price}</p>
                </div>
                <p className="text-[11px] text-darkgray">{item?.tags}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
