import type { z } from "zod";
import type { RegionZ, TripZ } from "./schemas/trip";

export type Region = z.infer<typeof RegionZ>;

export type Trip = z.infer<typeof TripZ>;
