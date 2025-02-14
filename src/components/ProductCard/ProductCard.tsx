import Image from "next/image";
import React from "react";
import { productCardProps } from "@/components/Types/ProductCardType";
import WishlistIcon from "./Wishlist";
import Link from "next/link";

const ProductCard: React.FC<productCardProps> = ({
  imageSrc,
  imageAlt,
  productName,
  productDescription,
  productPrice,
  discountPrice,
  svgStars,
  slug,
}) => {


  // function for stars
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <>
        {Array.from({ length: fullStars }, (_, index) => (
          <svg
            key={`full-star-${index}`}
            className="w-[14px] h-[14px] fill-blue-600"
            viewBox="0 0 14 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        ))}
        {Array.from({ length: emptyStars }, (_, index) => (
          <svg
            key={`empty-star-${index}`}
            className="w-[14px] h-[14px] fill-[#CED5D8]"
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
    <div className="w-[300px] h-[450px] shadow-xl rounded-xl flex flex-col overflow-hidden cursor-pointer    transition-all duration-500 transform-gpu lg:hover:scale-105 lg:hover:shadow-md will-change-transform">
      {/* Image container */}
      <div className="w-full h-[60%] bg-white relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain object-center"
        />
      </div>

      {/* Text content */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex-1">
          <h5 className="text-sm font-bold capitalize text-gray-800 truncate tracking-wide">
            {productName}
          </h5>
          <p className="text-sm text-gray-500 font-[400] tracking-wide">
            {productDescription}
          </p>
          <div className="flex flex-wrap justify-between gap-2 mt-2">
            <div className="flex gap-2">
              <h6 className="text-sm font-bold text-gray-800">
                ${productPrice.toFixed(0)}
              </h6>
              {discountPrice && (
                <h6 className="text-sm text-gray-500 line-through">
                  ${discountPrice.toFixed(1)}
                </h6>
              )}
            </div>

            <div className="flex items-center gap-0.5">
              {renderStars(svgStars)}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 py-2">
          <WishlistIcon />
          <Link
            prefetch={true}
            href={`/productDetails/${slug}`}
            className="text-sm px-2 min-h-[36px] w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded flex justify-center items-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
