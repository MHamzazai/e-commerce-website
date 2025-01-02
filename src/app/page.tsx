import Toggler from "@/components/HeroImageToggler/Toggler";
import ProductCard from "@/components/ProductCard/ProductCard";
import { productCardProps } from "@/components/Types/ProductCardType";

// Import the font
import { Poppins } from "next/font/google";
import Image from "next/image";

// Configure the font
const font1 = Poppins({
  weight: ["900"], // Specify font weights
  subsets: ["latin"], // Specify character subsets
});

export default async function Home() {
  // Fetch product data from the API route for our best section
  const response1 = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?category=ourBestSection`,
    {
      cache: "no-store", // Ensure fresh data on every request
    }
  );
  // Fetch product data from the API route for sale section
  const response2 = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?category=saleSection`,
    {
      cache: "no-store", // Ensure fresh data on every request
    }
  );

  // Fetch product data from the API route for shalwarKamezSection section
  const response3 = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?category=shalwarKamezSection`,
    {
      cache: "no-store", // Ensure fresh data on every request
    }
  );

  if (!response1.ok && response2.ok && response3.ok) {
    console.error("Failed to fetch products.");
    return (
      <div className="text-center text-red-500 mt-10">
        Failed to load products. Please try again later.
      </div>
    );
  }

  const products1: productCardProps[] = await response1.json(); // for our best section
  const products2: productCardProps[] = await response2.json(); // for sale section
  const products3: productCardProps[] = await response3.json(); // for shalwarKamezSection section

  return (
    <div className="min-h-screen w-full pt-[100px]">
      {/* Hero Section */}
      <section>
        <div
          className="bg-gradient-to-b lg:bg-gradient-to-r from-indigo-600 via-gray-900 to-purple-400 font-[sans-serif] min-h-[calc(100vh-100px)] flex flex-col justify-center border-b-2 border-blue-500 shadow-xl"
          style={{ minHeight: "calc(100vh - 100px)" }}
        >
          <div className="relative overflow-hidden h-full">
            <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-8 h-full flex flex-col justify-center">
              <div className="relative z-10 text-center lg:text-left">
                <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl lg:w-[55%] xl:w-[75%] transition-transform duration-300 lg:hover:scale-105">
                  <span className="lg:text-[82px]">Welcome</span> to
                  <br className="xl:hidden" />
                  <span className="text-indigo-300 px-5">
                    Online Shop E-commerce website.
                  </span>
                </h1>
                <p className="max-w-md mx-auto text-lg text-white mt-4 md:mt-6 md:max-w-3xl">
                  <span className="text-gray-300 font-bold border-b-2 pb-1 w-fit text-lg lg:text-[23px] transition-colors duration-300 lg:hover:text-gray-100">
                    Elevate Your Shopping Experience.
                  </span>
                  <br />
                  <span className="text-[14px] lg:text-[19px] text-blue-400 block mt-2 lg:hover:text-blue-300 transition-colors duration-300">
                    Unleash a world of premium products, fast delivery, and
                    irresistible deals.
                  </span>
                </p>
                <div className="mt-12 flex max-sm:flex-col sm:justify-center lg:justify-start gap-4">
                  <div className="rounded-md shadow">
                    <button className="w-full flex items-center justify-center px-8 py-3 text-base tracking-wide rounded-md text-indigo-600 bg-white hover:text-indigo-500 hover:bg-indigo-100 transition-transform duration-300 ease-in-out lg:hover:scale-105">
                      Get Started
                    </button>
                  </div>
                  <div>
                    <button className="w-full flex items-center justify-center px-8 py-3 text-base tracking-wide rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition-transform duration-300 ease-in-out lg:hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-full mb-10 md:0px xl:mt-12">
              <Toggler />
            </div>
          </div>
        </div>
      </section>

      {/* Our Best Section */}
      <section>
        <div className="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-3xl">
          <div className="flex justify-center items-center my-10">
            <h1
              className={`text-2xl text-center md:text-4xl uppercase tracking-wider border-b-[1px] pb-2 md:px-10 text lg:hover:scale-105 transition-all duration-500 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-gray-800 lg:hover:from-blue-500 lg:hover:to-gray-400 lg:text-5xl cursor-pointer ${font1.className}`}
            >
              Our Best Quality Jackets
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 place-items-center space-y-4 xl:space-y-0 xl:gap-28">
            {products1.map((item, index) => (
              <ProductCard
                key={index}
                imageAlt={item.imageAlt}
                imageSrc={item.imageSrc}
                productDescription={item.productDescription}
                productName={item.productName}
                productPrice={item.productPrice}
                lineThroughPrice={item.lineThroughPrice}
                svgStars={item.svgStars}
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

      {/* sale section */}
      <section>
        <div className="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-3xl">
          <div className="flex justify-center items-center my-10">
            <h1
              className={`text-3xl text-center md:text-4xl uppercase tracking-wider border-b-[1px] pb-2 md:px-10 text lg:hover:scale-105 transition-all duration-500 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-gray-800 lg:hover:from-blue-500 lg:hover:to-gray-400 lg:text-5xl cursor-pointer ${font1.className}`}
            >
              Exclusive Sales 30% off
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 place-items-center space-y-4 xl:space-y-0 xl:gap-28">
            {products2.map((item, index) => (
              <ProductCard
                key={index}
                imageAlt={item.imageAlt}
                imageSrc={item.imageSrc}
                productDescription={item.productDescription}
                productName={item.productName}
                productPrice={item.productPrice}
                lineThroughPrice={item.lineThroughPrice}
                svgStars={item.svgStars}
              />
            ))}
          </div>
        </div>
      </section>

      {/* mens shalwarKamezSection section */}
      <section>
        <div className="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-3xl">
          <div className="flex justify-center items-center my-10">
            <h1
              className={`text-3xl text-center md:text-4xl uppercase tracking-wider border-b-[1px] pb-2 md:px-10 text lg:hover:scale-105 transition-all duration-500 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-gray-800 lg:hover:from-blue-500 lg:hover:to-gray-400 lg:text-5xl cursor-pointer ${font1.className}`}
            >
              Shalwar Kameez Section
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center space-y-4 xl:space-y-0 xl:gap-12">
            {products3.map((item, index) => (
              <ProductCard
                key={index}
                imageAlt={item.imageAlt}
                imageSrc={item.imageSrc}
                productDescription={item.productDescription}
                productName={item.productName}
                productPrice={item.productPrice}
                lineThroughPrice={item.lineThroughPrice}
                svgStars={item.svgStars}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
