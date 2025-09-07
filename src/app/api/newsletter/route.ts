import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }
    const created = await prisma.subscriber.upsert({
      where: { email },
      create: { email },
      update: {},
    });
    return NextResponse.json({ ok: true, id: created.id });
  } catch (error) {
    return NextResponse.json({ error: "Unable to subscribe" }, { status: 500 });
  }
}


