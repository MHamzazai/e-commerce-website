"use client";
import React, { useState } from "react";

const WishlistIcon = () => {
  const [isFilled, setIsFilled] = useState(false);

  const toggleFill = () => {
    setIsFilled(!isFilled);
  };

  return (
    <div
      onClick={toggleFill}
      className={`w-10 h-8 sm:w-12 sm:h-9 flex items-center justify-center rounded cursor-pointer ${
        isFilled ? "bg-pink-50" : "bg-pink-100 hover:bg-pink-200"
      }`}
      title="Wishlist"
    >
      <i
        className={`ri-heart-3-${
          isFilled ? "fill text-red-500" : "line"
        } text-xl`}
      ></i>
    </div>
  );
};

export default WishlistIcon;
