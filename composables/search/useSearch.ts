import { TripZ } from "~/common/schemas/trip";
import { z } from "zod";
import type { Trip } from "~/common/trips";

export const useSearch = async () => {
  const route = useRoute();

  const searchResult = await useFetchWithSchema("/api/trips", {
    schema: z.object({ items: z.array(TripZ) }),
    query: computed(() => route.query),
  });

  return searchResult;
};
