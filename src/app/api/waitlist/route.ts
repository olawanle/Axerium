import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email, referredBy } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }
    const created = await prisma.waitlist.upsert({
      where: { email },
      update: { referredBy: referredBy ?? undefined },
      create: { email, referredBy: referredBy ?? undefined },
    });
    return NextResponse.json({ ok: true, referralId: created.referralId });
  } catch (error) {
    return NextResponse.json({ error: "Unable to join waitlist" }, { status: 500 });
  }
}


