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
    <div className="h-auto p-[10%] bg-amber-50 flex-center">
      <div className="w-[90%] grid gap-1 grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
        {product?.map(item => (
          <div className="bg-amber-300 max-h-[420px] max-w-[240px] aspect-[240/420] flex flex-col items-center ">
            <img
              className="h-[60%] w-[100%] flex flex-center"
              src={item?.images[0]}
              alt="이미지"
            />
            <div className="w-[100%]">
              <div className="flex flex-center flex-col">
                <p>{item?.brand}</p>
                <p>{item?.title}</p>
                {/* <p>{product?.description}</p> */}
                <div>
                  <p>
                    {item?.discountPercentage}%{item?.price}
                  </p>
                </div>
                <p>{item?.tags}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
