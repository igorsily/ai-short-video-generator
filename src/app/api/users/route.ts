import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { db } from "@/drizzle/db";
import { Users } from "@/drizzle/schemas";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  const body: {
    fullName: string;
    imageUrl: string;
    email: string;
  } = await request.json();

  if (!body) {
    redirect("/sign-in");
  }

  const user = await db.select().from(Users).where(eq(Users.email, body.email));

  if (user && user.length === 0) {
    await db.insert(Users).values({
      name: body.fullName,
      email: body.email,
      imageUrl: body.imageUrl,
    });
  }

  return NextResponse.json(body);
}
