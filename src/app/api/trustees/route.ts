import { NextResponse } from "next/server";
import { pool } from "../../../lib/db";

export async function GET() {
  try {

    const result = await pool.query(
      `SELECT 
        id,
        name,
        email,
        phone,
        "alternatePhone",
        gender,
        "dateOfBirth",
        "dateOfMarriage",
        address,
        designation,
        city,
        state,
        pincode,
        "imageUrl"
      FROM "Trustee"
      ORDER BY id ASC`
    );

    return NextResponse.json(result.rows);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch trustees" },
      { status: 500 }
    );

  }
}