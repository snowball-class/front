import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return NextResponse.json({ data });
}
