import { mockTrips } from "~/mocks/trips";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  if (typeof query.destination === "string") {
  }

  const response = mockTrips
    .filter((trip) => {
      // Filters by destination
      // Dates are ignored as we don't have enough mocked data
      if (typeof query.destination === "string") {
        return trip.region === query.destination;
      }

      return true;
    })
    .map(({ fullDescription, ...props }) => ({ ...props }))
    .slice(0, 10);

  await sleep(400); // Simulate network delay

  return { items: response };
});
