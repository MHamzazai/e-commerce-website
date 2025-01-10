import ProductCard from "@/components/ProductCard/ProductCard";
import { productCardProps } from "@/components/Types/ProductCardType";
import React from "react";

// Import the font
import { Poppins } from "next/font/google";
import Image from "next/image";

// Configure the font
const font1 = Poppins({
  weight: ["900"], // Specify font weights
  subsets: ["latin"], // Specify character subsets
});

export default async function Shoes() {

  // fetch the products data from the API route for our mens shoes section
  const response1 = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?section=Mens-shoes-section`,
    {
      cache: "no-store", // Ensure fresh data on every request
    }
  );

  // fetch the products data from the API route for our womens shoes section
  const response2 = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?section=Womens-shoes-section`,
    {
      cache: "no-store", // Ensure fresh data on every request
    }
  );

  // fetch the products data from the API route for our shoes sale section
  const response3 = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?section=Shoes-sale-section`,
    {
      cache: "no-store", // Ensure fresh data on every request
    }
  );

  // checking if the data fetch successfully
  if (!response1.ok && response2.ok && response3.ok) {
    console.error("Failed to fetch products.");
    return (
      <div className="text-center text-red-500 mt-10">
        Failed to load products. Please try again later.
      </div>
    );
  }

  // converting the products data in json
  const products1 = await response1.json();
  const products2 = await response2.json();
  const products3 = await response3.json();

  return (
    <div className="min-h-screen w-full pt-[100px]">
      {/* mens shoes section */}
      <section>
        <div className="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-3xl">
          <div className="flex justify-center items-center my-10">
            <h1
              className={`text-3xl text-center md:text-4xl uppercase tracking-wider border-b-[1px] pb-2 md:px-10 text lg:hover:scale-105 transition-all duration-500 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-gray-800 lg:hover:from-blue-500 lg:hover:to-gray-400 lg:text-5xl cursor-pointer ${font1.className}`}
            >
              Our Premium Mens Shoes
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 place-items-center space-y-4">
            {products1.map((item: productCardProps, index: number) => (
              <ProductCard
                key={index}
                imageAlt={item.imageAlt}
                slug={item.slug}
                imageSrc={item.imageSrc}
                productDescription={item.productDescription}
                productName={item.productName}
                productPrice={item.productPrice}
                svgStars={item.svgStars}
              />
            ))}
          </div>
        </div>
      </section>

      {/* womens shoes section */}
      <section>
        <div className="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-3xl">
          <div className="flex justify-center items-center my-10">
            <h1
              className={`text-3xl text-center md:text-4xl uppercase tracking-wider border-b-[1px] pb-2 md:px-10 text lg:hover:scale-105 transition-all duration-500 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-gray-800 lg:hover:from-blue-500 lg:hover:to-gray-400 lg:text-5xl cursor-pointer ${font1.className}`}
            >
              Our Premium Womens Shoes
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 place-items-center space-y-4">
            {products2.map((item: productCardProps, index: number) => (
              <ProductCard
                key={index}
                imageAlt={item.imageAlt}
                imageSrc={item.imageSrc}
                productDescription={item.productDescription}
                productName={item.productName}
                productPrice={item.productPrice}
                svgStars={item.svgStars}
                slug={item.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* sale section banner */}
      <section>
        <div className="w-[90%] flex-col md:flex-row md:py-0 mx-auto h-fit py-6 flex justify-center items-center my-32 border-x-2 pb-2 border-black rounded-2xl shadow-lg shadow-blue-400 lg:hover:scale-110 transition-all duration-500 cursor-pointer lg:hover:shadow-xl">
          <h1
            className={`${font1.className} text-3xl lg:text-4xl uppercase font-[sans-serif]
                  tracking-wider text-transparent bg-clip-text bg-gradient-to-l from-[#0010edeb] to-red-900
                  lg:hover:from-[#0010edc6] lg:hover:to-red-600 transition-all duration-500`}
          >
            Exclusive Sale
          </h1>

          <Image
            src={
              "https://st3.depositphotos.com/3312217/15965/v/450/depositphotos_159658168-stock-illustration-glossy-blue-30-thirty-percent.jpg"
            }
            alt="sale"
            width={200}
            height={200}
            className="px-3"
          ></Image>

          <h1
            className={`${font1.className} text-3xl lg:text-4xl uppercase tracking-wider
                  text-transparent bg-clip-text bg-gradient-to-r from-[#000fed] to-red-900
                  lg:hover:from-[#0010edc6] lg:hover:to-red-600 transition-all duration-500`}
          >
            off
          </h1>
        </div>
      </section>

      {/* shoes sale section */}
      <section>
        <div className="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-3xl">
          <div className="flex justify-center items-center my-10">
            <h1
              className={`text-3xl text-center md:text-4xl uppercase tracking-wider border-b-[1px] pb-2 md:px-10 text lg:hover:scale-105 transition-all duration-500 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-gray-800 lg:hover:from-blue-500 lg:hover:to-gray-400 lg:text-5xl cursor-pointer ${font1.className}`}
            >
              Exclusive Sale 30% off
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 place-items-center space-y-4">
            {products3.map((item: productCardProps, index: number) => (
              <ProductCard
                key={index}
                imageAlt={item.imageAlt}
                slug={item.slug}
                imageSrc={item.imageSrc}
                productDescription={item.productDescription}
                productName={item.productName}
                productPrice={item.productPrice}
                discountPrice={item.discountPrice}
                svgStars={item.svgStars}
              />
            ))}
          </div>
        </div>
      </section> 

    </div>
  );
}
