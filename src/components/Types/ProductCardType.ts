export type productCardProps = {
  id?: number;
  imageSrc: string;
  imageAlt: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  discountPrice?: number;
  svgStars: number;
  slug: string;
};
export type productSectionsTypes = {
  ourBestSection: productCardProps[];
  saleSection: productCardProps[];
  shalwarKamezSection: productCardProps[];
  mensWatches: productCardProps[];
  womensWatches: productCardProps[];
  salesWatches: productCardProps[];
  mensShoes: productCardProps[];
  womensShoes: productCardProps[];
  salesShoes: productCardProps[];
};
