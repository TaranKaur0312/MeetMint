"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { eventSchema } from "@/app/lib/validators";
// Create a new event for the authenticated user
export async function createEvent(data) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const validatedData = eventSchema.parse(data);

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const event = await db.event.create({
    data: {
      ...validatedData,
      userId: user.id,
    },
  });

  return event;
}

// Get all events created by the authenticated user
export async function getUserEvents(user) {
  const events = await db.event.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    include: {
      _count: {
        select: { bookings: true },
      },
    },
  });

  return { events, username: user.username };
}

// Delete an event (only if it belongs to the authenticated user)
export async function deleteEvent(eventId) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const event = await db.event.findUnique({
    where: { id: eventId },
  });

  if (!event || event.userId !== user.id) {
    throw new Error("Event not found or unauthorized");
  }

  await db.event.delete({
    where: { id: eventId },
  });

  return { success: true };
}

// Get public event details by username and event ID
export async function getEventDetails(username, eventId) {
  const event = await db.event.findFirst({
    where: {
      id: eventId,
      user: {
        username: username,
      },
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
          imageUrl: true,
        },
      },
    },
  });

  return event;
}

import { startOfDay, addDays, format, parseISO, isBefore, addMinutes } from 'date-fns';

export async function getEventAvailability(eventId) {
  const event = await db.event.findUnique({
    where: {
      id: eventId,
    },
    include: {
      user: {
        include: {
          availability: {
            select: {
              days: true,
              timeGap: true,
            },
          },
          bookings: {
            select: {
              startTime: true,
              endTime: true,
            },
          },
        },
      },
    },
  });

  if (!event || !event.user?.availability) {
    return [];
  }

  const { availability, bookings } = event.user;

  const startDate = startOfDay(new Date());
  const endDate = addDays(startDate, 30);
  const availableDates = [];

  for (let date = startDate; date <= endDate; date = addDays(date, 1)) {
    const dayOfWeek = format(date, "EEEE").toUpperCase();
    const dayAvailability = availability.days.find((d) => d.day === dayOfWeek);

    if (dayAvailability) {
      const dateStr = format(date, "yyyy-MM-dd");

      const slots = generateAvailableTimeSlots(
        dayAvailability.startTime,
        dayAvailability.endTime,
        event.duration,
        bookings,
        dateStr,
        availability.timeGap
      );

      availableDates.push({
        date: dateStr,
        slots,
      });
    }
  }

  return availableDates;
}

// Generate time slots
function generateAvailableTimeSlots(
  startTime,
  endTime,
  duration,
  bookings,
  dateStr,
  timeGap = 0
) {
  const slots = [];

  let currentTime = parseISO(`${dateStr}T${startTime.toISOString().slice(11, 16)}`);
  const slotEndTime = parseISO(`${dateStr}T${endTime.toISOString().slice(11, 16)}`);

  const now = new Date();
  if (format(now, "yyyy-MM-dd") === dateStr) {
    currentTime = isBefore(currentTime, now) ? addMinutes(now, timeGap) : currentTime;
  }

  while (currentTime < slotEndTime) {
    const slotEnd = new Date(currentTime.getTime() + duration * 60000);

    const isSlotAvailable = !bookings.some((booking) => {
      const bookingStart = new Date(booking.startTime);
      const bookingEnd = new Date(booking.endTime);

      return (
        (currentTime >= bookingStart && currentTime < bookingEnd) ||
        (slotEnd > bookingStart && slotEnd <= bookingEnd) ||
        (currentTime <= bookingStart && slotEnd >= bookingEnd)
      );
    });

    if (isSlotAvailable) {
      slots.push(format(currentTime, "HH:mm"));
    }

    currentTime = addMinutes(currentTime, duration + timeGap);
  }

  return slots;
}

// export async function getEventAvailability(eventId) {
//   const event = await db.event.findUnique({
//     where: {
//       id: eventId,
//     },

// include: {
//   user: {
//     include: {
//       availability: {
//         select: 
//          days: true,
//          timeGap: true,
//         },
//         },
//        bookings: {
//         select: {
//           startTime: true,
//           endTime: true,
//         }, 
//       },
//     },
//   },
// },
// });

// if (!event || event.user.availability) {
// return []
// }

// const availability, bookings = event.user;

// const startDate = startOfDay(new Date());
// const endDate = addDays(startDate, 30);
// const availableDates = [];

// for (let date = startDate; date <= endDate; date = addDays(date, 1)) {
// const dayOfWeek = format(date, "EEEE").toUpperCase();
// const dayAvailability = availability.days.find((day) => d.day === dayOfWeek);

// if (dayAvailability) {
// const dateStr = format(date, "yyyy-MM-dd");

// const slots = generateAvailableTimeSlots(
//  dayAvailability.startTime,
//  dayAvailability.endTime,
//  event.duration,
//  bookings,
//  dateStr,
//  availability.timeGap
// )
// availableDates.push({
//   date: dateStr,
//   slots,
// });
// }
// return availableDates;
// }

// function generateAvailableTimeSlots(params) (
// startTime,
// endTime,
// duration,
// bookings,
// dateStr,
// timeGap = 0
// ) {
// const slots = [];
// const currentTime = parseISO(
// `${dateStr}T${startTime.toISOString().slice(11, 16)}`
// );
// const slots = [];
// const slotEndTime = parseISO(
// `${dateStr}T${endTime.toISOString().slice(11, 16)}`
// );

// const now = new Date();
// if (format(now, "yyyy-MM-dd") === dateStr) {
// currentTime = isBefore (currentTime, now)?addMinutes(now, timeGap)
// :currentTime;

// while (currentTime < slotEndTime) {
// const slotEnd = new Date(currentTime.getTime() + duration * 60000);

// const isSlotAvailable = !bookings.some(booking =>{
// const bookingStart = booking.startTime;
// const bookingEnd = booking.endTime;

// return (
//   (currentTime >= bookingStart && currentTime < bookingEnd) ||
//   (slotEnd > bookingStart && slotEnd <= bookingEnd) ||
//   (currentTime <= bookingStart && slotEnd >= bookingEnd)
// );
// })
// if (isSlotAvailable) {
// slots.push(format (currentTime, "HH:mm"));
// };
// currentTime = slotEnd
// }
// return slots
// }
// }
