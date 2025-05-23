// app/[username]/[eventId]/page.tsx

export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getEventDetails } from "@/actions/events";
import { getEventAvailability } from "@/actions/availability";
import EventDetails from "./_components/event-details";
import BookingForm from "./_components/booking-form";

export async function generateMetadata(props) {
  const { username, eventId } = props.params;
  const event = await getEventDetails(username, eventId);

  if (!event) {
    return {
      title: "Event Not Found | MeetMint",
      description: "The event you're looking for doesn't exist.",
    };
  }

  return {
    title: `Book ${event.title} with ${event.user.name} | MeetMint`,
    description: `Schedule a ${event.duration}-minute ${event.title} event with ${event.user.name}.`,
  };
}

export default async function EventBookingPage(props) {
  const { username, eventId } = props.params;
  const event = await getEventDetails(username, eventId);
  const availability = await getEventAvailability(eventId);

  if (!event) notFound();

  return (
    <div className="flex flex-col justify-center lg:flex-row px-4 py-8">
      <EventDetails event={event} />
      <Suspense fallback={<div>Loading booking form...</div>}>
        <BookingForm event={event} availability={availability} />
      </Suspense>
    </div>
  );
}
