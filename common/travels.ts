import type { z } from "zod";
import type { RegionZ, TravelZ } from "./schemas/travel";

export type Region = z.infer<typeof RegionZ>;

export type Travel = z.infer<typeof TravelZ>;
