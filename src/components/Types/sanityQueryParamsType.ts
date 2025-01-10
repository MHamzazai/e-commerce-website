// Define the type for the products data
interface Product {
    _type: string;
    id: number;
    productName: string;
    productDescription: string;
    imageSrc: string;
    imageAlt: string;
    productPrice: number;
    discountPrice: number;
    svgStars: number;
    slug: string;
  }
  export default Product;