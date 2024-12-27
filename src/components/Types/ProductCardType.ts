export type productCardProps = {
    id?: number;
    imageSrc: string;
    imageAlt: string;
    productName: string;
    productDescription: string;
    productPrice: number;
    lineThroughPrice?: number;
    svgStars: number;
}