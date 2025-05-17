import React from "react";
import { getUserEvents } from "@/actions/events";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export default async function EventsPage() {
  // Fetch events for the authenticated user
  // const userData = await getUserEvents();
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    return (
      <p className="text-center text-red-500 mt-10">
        You must be logged in to view your events.
      </p>
    );
  }

  const userData = await getUserEvents(user);

  const { events, username } = userData;

  // If user is logged in but has no events
  if (events.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        You haven&apos;t created any events yet.
      </p>
    );
  }

  // Render list of events
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {events.map((event) => (
        <Card key={event.id}>
          <CardHeader>
            <CardTitle>{event.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm text-muted-foreground">
              {event.description}
            </p>
            <p className="mb-2 text-sm">Bookings: {event._count.bookings}</p>
            <div className="flex justify-end">
              <Link href={`/${username}/${event.id}`}>
                <Button size="sm" variant="secondary">
                  View
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
