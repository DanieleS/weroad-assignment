import type { Travel } from "~/common/travels";

export const useTravel = async () => {
  const route = useRoute();
  const travelGuid = computed(() => route.params.guid as string);

  const travel = await useFetch<Travel>(
    computed(() => `/api/travels/${travelGuid.value}`),
  );

  return travel;
};
