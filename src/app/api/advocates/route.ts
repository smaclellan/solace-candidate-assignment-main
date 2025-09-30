import { NextResponse } from "next/server";
import db from "../../../db";
import { advocates } from "../../../db/schema";

export const dynamic = "force-dynamic"; // Prevents caching

export async function GET() {
  try {
    const data = await db.select().from(advocates);
    
    return NextResponse.json({ 
      data,
      count: data.length
    });
  } catch (error) {
    console.error("Failed to fetch advocates:", error);
    
    return NextResponse.json(
      { 
        error: "Failed to fetch advocates",
        message: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
