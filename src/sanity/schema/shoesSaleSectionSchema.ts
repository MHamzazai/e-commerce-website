import { defineField, defineType } from "sanity";

export const shoesSaleSectionSchema = defineType({
  name: "Shoes-sale-section",
  title: "Shoes Sale Section",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "Product ID",
      type: "number",
    }),
    
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: 'productName',
        maxLength: 200,
      },
    }),

    defineField({
      name: "productName",
      title: "Product Name",
      type: "string",
    }),

    defineField({
      name: "productDescription",
      title: "Product Description",
      type: "text",
    }),

    defineField({
      name: "imageSrc",
      title: "Image Source",
      type: "string",
      description:
        "Enter the relative URL of the image from the public folder, e.g., /images/example.jpg",
    }),

    defineField({
      name: "imageAlt",
      title: "Image Alt Text",
      type: "string",
    }),

    defineField({
      name: "productPrice",
      title: "Product Price",
      type: "number",
    }),

    defineField({
      name: "discountPrice",
      title: "Discount Price",
      type: "number",
      initialValue: 0,
      description: "Optional",
    }),

    defineField({
      name: "svgStars",
      title: "Number Of Stars (SVG)",
      type: "number",
    }),
  ],
});
