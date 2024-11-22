import { TravelZ } from "~/common/schemas/travel";
import { useCheckoutSession } from "./useCheckoutSession";

export const useTravel = async () => {
  const sessionGuid = useCheckoutSession();

  const { travelId } = await $fetch(
    `/api/checkout/session?sessionId=${sessionGuid.value}`,
  );

  const travel = await useFetchWithSchema(
    computed(() => `/api/travels/${travelId}`),
    {
      schema: TravelZ,
    },
  );

  return travel;
};
