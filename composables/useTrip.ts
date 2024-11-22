import { TripDetailZ } from "~/common/schemas/trip";

export const useTrip = async (tripId: string) => {
  const trip = await useFetchWithSchema(
    computed(() => `/api/trips/${tripId}`),
    {
      schema: TripDetailZ,
    },
  );
  return trip;
};
