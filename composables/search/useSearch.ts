import { TravelZ } from "~/common/schemas/travel";
import { z } from "zod";
import type { Travel } from "~/common/travels";

export const useSearch = async () => {
  const route = useRoute();

  const searchResult = await useFetchWithSchema("/api/travels", {
    schema: z.object({ items: z.array(TravelZ) }),
    query: computed(() => route.query),
  });

  return searchResult;
};
