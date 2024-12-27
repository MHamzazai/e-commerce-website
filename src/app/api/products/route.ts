// app/api/products/route.ts
import { NextResponse } from "next/server";
import { productData } from "@/../../Data/productData"; // Adjust the import path as needed

// Handle the GET method to return product data
export async function GET() {
  if (!productData || productData.length === 0) {
    // If no products are available, return a 404 error with an error message
    return NextResponse.json(
      { errorMessage: "No products available." },
      { status: 404 }
    );
  }

  // Return the product data as JSON if the GET method is called
  return NextResponse.json(productData, { status: 200 });
}

// Handle unsupported HTTP methods (e.g., POST, PUT, DELETE)
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
