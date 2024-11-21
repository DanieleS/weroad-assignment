import { mockTravels } from "~/mocks/travels";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  if (typeof query.destination === "string") {
  }

  const response = mockTravels
    .filter((travel) => {
      // Filters by destination
      // Dates are ignored as we don't have enough mocked data
      if (typeof query.destination === "string") {
        return travel.region === query.destination;
      }

      return true;
    })
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  await sleep(400); // Simulate network delay

  return { items: response };
});
