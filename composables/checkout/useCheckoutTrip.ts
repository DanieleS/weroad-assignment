import { TripZ } from "~/common/schemas/trip";
import { useCheckoutSession } from "./useCheckoutSession";

/**
 * Get the checkout trip using the checkout session
 * @returns The checkout trip
 */
export const useCheckoutTrip = async () => {
  const sessionGuid = useCheckoutSession();

  const { tripId } = await $fetch(
    `/api/checkout/session?sessionId=${sessionGuid.value}`,
  );

  const trip = await useFetchWithSchema(
    computed(() => `/api/trips/${tripId}`),
    {
      schema: TripZ,
    },
  );

  return trip;
};
