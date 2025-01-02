// app/api/products/route.ts
import { NextResponse } from "next/server";
import { productData } from "@/../../Data/productData"; // Adjust the import path as needed

// Handle the GET method to return product data
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  if (!category) {
    // If the category query parameter is missing
    return NextResponse.json(
      { errorMessage: "Category is missing in the query parameters." },
      { status: 400 }
    );
  }

  // Check if the requested category exists in productData
  const categoryData = productData[category as keyof typeof productData];

  if (!categoryData || categoryData.length === 0) {
    // If the category doesn't exist or has no products
    return NextResponse.json(
      { errorMessage: `No products found for the category: ${category}` },
      { status: 404 }
    );
  }

  // Return the products for the specified category
  return NextResponse.json(categoryData, { status: 200 });
}

// Handle unsupported HTTP methods
export async function OPTIONS() {
  return NextResponse.json(
    { errorMessage: "Method Not Allowed" },
    { status: 405 }
  );
}

export async function POST() {
  return NextResponse.json(
    { errorMessage: "POST method not implemented" },
    { status: 405 }
  );
}
