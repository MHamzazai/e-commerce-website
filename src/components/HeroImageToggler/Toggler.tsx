"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Toggler() {
  const clothesImages: string[] = [
    "/images/boys-image.jpg",
    "/images/denim-jacket.jpg",
    "/images/girls-image.webp",
    "/images/womens-image.jpg",
    "/images/mens-image.webp",
    "/images/mens-suit-image.jpg",
  ];

  const [imageIndex, setImageIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "left"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setSlideDirection("right");
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % clothesImages.length);
        setFade(true);
      }, 500); // Match fade duration
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[60%] md:w-2/5 lg:w-[90%] xl:w-[60%] xl:h-[590px] h-[250px] md:h-[400px] lg:h-[600px] mx-auto overflow-hidden">
      <Image
        src={clothesImages[imageIndex]}
        alt="Product Image"
        width={1200}
        height={200}
        className={`h-[100%] w-[100%] rounded-2xl object-cover transition duration-500 ${
          fade
            ? "opacity-100 translate-x-0"
            : slideDirection === "left"
            ? "-translate-x-full opacity-0"
            : "translate-x-full opacity-0"
        }`}
      />
    </div>
  );
}
