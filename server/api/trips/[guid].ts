import { mockTrips } from "~/mocks/trips";

export default defineEventHandler(async (event) => {
  const tripGuid = getRouterParam(event, "guid");

  const trip = mockTrips.find((t) => t.id === tripGuid);

  if (!trip) {
    throw createError({
      status: 404,
      message: "Trip not found",
    });
  }

  return trip;
});
