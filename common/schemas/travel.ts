import { z } from "zod";

export const RegionZ = z.union([
  z.literal("europe"),
  z.literal("asia"),
  z.literal("africa"),
  z.literal("america"),
  z.literal("oceania"),
]);

export const TravelZ = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  departureDate: z.coerce.date(),
  arrivalDate: z.coerce.date(),
  pricePerPerson: z.number(),
  picture: z.string(),
  region: RegionZ,
});
