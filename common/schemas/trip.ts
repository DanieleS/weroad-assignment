import { z } from "zod";

export const RegionZ = z.union([
  z.literal("europe"),
  z.literal("asia"),
  z.literal("africa"),
  z.literal("america"),
  z.literal("oceania"),
]);

export const TripZ = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  departureDate: z.coerce.date(),
  returnDate: z.coerce.date(),
  pricePerPerson: z.number(),
  rating: z.number().min(0).max(5),
  picture: z.string(),
  region: RegionZ,
});
