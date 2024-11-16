import { mockTravels } from "~/mocks/travels";

export default defineEventHandler(async (event) => {
  const travelGuid = getRouterParam(event, "guid");

  const travel = mockTravels.find((t) => t.id === travelGuid);

  if (!travel) {
    throw createError({
      status: 404,
      message: "Travel not found",
    });
  }

  return travel;
});
