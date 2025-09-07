import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd", {
      next: { revalidate: 60 },
      headers: { "x-cg-demo-api-key": process.env.COINGECKO_API_KEY ?? "" },
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch price" }, { status: 502 });
    }
    const data = await res.json();
    return NextResponse.json({ btcUsd: data?.bitcoin?.usd ?? null });
  } catch (error) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}


