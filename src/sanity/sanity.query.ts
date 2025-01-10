import { groq } from "next-sanity";
import sanityClient from "./sanity.client";
import { productCardProps } from "@/components/Types/ProductCardType";

// Type for the section parameter
import Product from "@/components/Types/sanityQueryParamsType";

// query for fetching multiple sections dynamically based on the query parameter
export default async function GetSectionQuery(
  section: string
): Promise<Product[]> {
  const sectionsData = await sanityClient.fetch(
    groq`
      *[_type == $section]{
        _type,
        id,
        productName,
        productDescription,
        imageSrc,
        imageAlt,
        productPrice,
        discountPrice,
        svgStars,
        "slug": slug.current, 
      }`,
    { section }
  );

  return sectionsData;
}


// This function will fetch product data based on the slug across sections
export const fetchProductData = async (
  slug: string
): Promise<productCardProps | null> => {
  const query = groq`
    *[_type match "*-section" && slug.current == $slug][0] {
      productName,
      productDescription,
      imageSrc,
      imageAlt,
      productPrice,
      discountPrice,
      svgStars,
    }
`;

  const data = await sanityClient.fetch(query, { slug });

  return data || null; // Return null if no data found
};
