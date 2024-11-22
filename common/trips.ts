import type { z } from "zod";
import type { RegionZ, TripDetailZ, TripZ } from "./schemas/trip";

export type Region = z.infer<typeof RegionZ>;

export type Trip = z.infer<typeof TripZ>;
export type TripDetail = z.infer<typeof TripDetailZ>;
