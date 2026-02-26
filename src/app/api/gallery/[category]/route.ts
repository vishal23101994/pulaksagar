import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: Request,
  context: { params: Promise<{ category: string }> }
) {
  try {
    // ✅ MUST await params in Next 16
    const { category } = await context.params;

    const categoryMap: Record<string, string> = {
      maharaj: "images/gallery/maharaj",
      thoughts: "images/gallery/thoughts",
      tirth: "images/gallery/tirth",
      logo: "images/gallery/logo",
    };

    const folder = categoryMap[category];

    if (!folder) {
      return NextResponse.json(
        { error: `Invalid category: ${category}` },
        { status: 400 }
      );
    }

    const dirPath = path.join(process.cwd(), "public", folder);

    if (!fs.existsSync(dirPath)) {
      return NextResponse.json(
        { error: `Folder not found: ${folder}` },
        { status: 500 }
      );
    }

    const files = fs
      .readdirSync(dirPath)
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map((file) => `/${folder}/${file}`);

    return NextResponse.json(files);

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load images" },
      { status: 500 }
    );
  }
}