import { fetchCoffeeStores } from "@/lib/coffee-stores";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const longLat = searchParams.get("longLat") || "";
    const limit = searchParams.get("limit") || "";
    if (longLat) {
      const response = await fetchCoffeeStores(longLat, parseInt(limit));

      return NextResponse.json(response);
    }
  } catch (error) {
    console.error("Error fetching coffee stores", error);
    return NextResponse.json(
      { error: "Error fetching coffee stores" },
      { status: 500 },
    );
  }
}
