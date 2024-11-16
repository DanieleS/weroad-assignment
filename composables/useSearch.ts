import type { Travel } from "~/common/travels";

export const useSearch = async () => {
  const route = useRoute();

  const searchResult = await useFetch<{
    items: Travel[];
  }>("/api/travels", {
    query: computed(() => route.query),
  });

  return searchResult;
};
