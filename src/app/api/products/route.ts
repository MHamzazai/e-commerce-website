import { NextResponse } from "next/server";
import GetSectionQuery from "@/sanity/sanity.query";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const section = searchParams.get("section");

  // Type the section parameter as a string and ensure it's not empty
  if (!section || typeof section !== "string") {
    return NextResponse.json(
      { errorMessage: "Section parameter is required and must be a string." },
      { status: 400 }
    );
  }

  try {
    // Fetch the section data using the typed function
    const sectionData = await GetSectionQuery(section);

    if (!sectionData || sectionData.length === 0) {
      return NextResponse.json(
        { errorMessage: `No data found for section: ${section}` },
        { status: 404 }
      );
    }

    return NextResponse.json(sectionData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        errorMessage: "Failed to fetch data from Sanity.", error,

      },
      { status: 500 }
    );
  }
}
