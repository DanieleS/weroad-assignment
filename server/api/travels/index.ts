import { mockTravels } from "~/mocks/travels";

export default defineEventHandler(async () => {
  // Pick 10 random travels
  const response = mockTravels.sort(() => Math.random() - 0.5).slice(0, 10);

  await sleep(400); // Simulate network delay

  return { items: response };
});
