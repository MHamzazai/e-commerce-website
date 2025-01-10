import { fetchProductData } from "@/sanity/sanity.query"; // The function to fetch data
import Image from "next/image";
import { notFound } from "next/navigation";
import { Archivo } from "next/font/google";
const font1 = Archivo({
  weight: "800",
  subsets: ["latin"],
});

import { Open_Sans } from "next/font/google";
import Link from "next/link";
const font2 = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

// This function will fetch product data for SSR in Next.js 14
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const productData = await fetchProductData(slug);

  if (!productData) {
    return { notFound: true }; // Return 404 metadata if no product found
  }
}

export default async function ProductDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Fetch the product data for the specific slug
  const productData = await fetchProductData(slug);

  if (!productData) {
    notFound(); // This triggers a 404 page if no product is found
  }

  // function for stars
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <>
        {Array.from({ length: fullStars }, (_, index) => (
          <svg
            key={`full-star-${index}`}
            className="w-[25px] h-[19px] fill-blue-600"
            viewBox="0 0 14 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        ))}
        {Array.from({ length: emptyStars }, (_, index) => (
          <svg
            key={`empty-star-${index}`}
            className="w-[25px] h-[19px] fill-[#CED5D8]"
            viewBox="0 0 14 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        ))}
      </>
    );
  };

  return (
    <div className="flex pt-28 lg:pt-[100px] justify-center items-center min-h-screen lg:h-screen w-full">
      <div className="h-full w-[95%] flex flex-col lg:flex-row">

        <div className="flex-1 border-r-2 flex flex-col justify-center items-center">
          <div className="">
            <Image
              src={productData.imageSrc}
              alt={productData.imageAlt}
              width={300}
              height={200}
              className="object-cover object-center cursor-pointer lg:hover:scale-110 transition-all duration-500"
            ></Image>
          </div>

          <div className="pt-4 pb-3">
            <h1 className="text-3xl font-[700] tracking-wide text-center text-gray-800">
              Rating {productData.svgStars} / 5
            </h1>
          </div>

          <div className="flex">{renderStars(productData.svgStars)}</div>
        </div>

        <div className="flex-1">

          <div className="flex flex-col justify-center text-center mt-10 mb-10">
            <h1
              className={`${font1.className} border-x-4 w-fit mx-auto px-4 py-1 rounded-tl-2xl rounded-br-2xl text-4xl text-transparent bg-clip-text bg-gradient-to-br
              from-blue-600 via-gray-400 to-red-500`}
            >
              {productData.productName.toUpperCase()}
            </h1>
            <h4
              className="text-left mt-8 text-2xl border-b-2 w-fit text-transparent bg-clip-text px-4 font-[700]
            bg-gradient-to-tr from-black via-g to-red-400"
            >
              Short Description :
            </h4>
            <p
              className={`${font2.className} text-left pl-40 mt-4 text-lg text-gray-800`}
            >
              {productData.productDescription}.
            </p>
          </div>

          <div className="flex">
            <h1
              className="text-left mt-8 text-2xl border-b-2 w-fit text-transparent bg-clip-text px-4 font-[700]
            bg-gradient-to-tr from-black via-g to-red-400"
            >
              Product Price :
            </h1>
            <h2
              className={`${font2.className}  text-left pl-5 mt-9 text-xl text-gray-800`}
            >
              {productData.productPrice}$.
            </h2>
          </div>

          {productData.discountPrice ? (
            <div className="flex">
              <h1
                className="text-left mt-8 text-2xl border-b-2 pb-1 w-fit text-transparent bg-clip-text px-4 font-[700]
            bg-gradient-to-tr from-black via-g to-red-400"
              >
                Original Price :
              </h1>
              <h2
                className={`${font2.className} line-through text-left pl-5 mt-9 text-xl text-gray-800`}
              >
                {productData.discountPrice}$.
              </h2>
            </div>
          ) : (
            ""
          )}

          <div className="mt-16 text-center w-full">
            <Link
              href={"#"}
              className="bg-gradient-to-tr from-blue-500 via-teal-400 to-gray-600 px-20 py-2 text-white
            text-2xl font-[600] rounded-xl"
            >
              Add To Cart
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
