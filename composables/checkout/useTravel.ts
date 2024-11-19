import { TravelZ } from "~/common/schemas/travel";

export const useTravel = async () => {
  const route = useRoute();
  const travelGuid = computed(() => route.params.guid as string);

  const travel = await useFetchWithSchema(
    computed(() => `/api/travels/${travelGuid.value}`),
    {
      schema: TravelZ,
    },
  );

  return travel;
};
