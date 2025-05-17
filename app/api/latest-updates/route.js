// app/api/latest-updates/route.ts
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export async function GET() {
  const clerkUserDetails = await auth();

  if (!clerkUserDetails.userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: clerkUserDetails.userId },
  });

  if (!user) {
    user = await db.user.create({
      data: {
        clerkUserId: clerkUserDetails.userId, // Store Clerk's userId
        email: "user@example.com",
      },
    });
    console.log("User created:", user);
  } else {
    console.log("User already exists:", user);
  }

  const now = new Date();

  const upcomingMeetings = await db.booking.findMany({
    where: {
      userId: user.id,
      startTime: { gte: now },
    },
    include: {
      event: {
        select: {
          title: true,
        },
      },
    },
    orderBy: {
      startTime: "asc",
    },
    take: 3,
  });

  return NextResponse.json(upcomingMeetings);
}
