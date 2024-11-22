export default defineEventHandler(async (event) => {
  await sleep(400); // Simulate network delay

  const query = getQuery(event);
  const sessionId = query.sessionId;

  if (typeof sessionId !== "string") {
    return setResponseStatus(event, 400);
  }

  if (!sessionStore.has(sessionId)) {
    return setResponseStatus(event, 404);
  }

  const travelId = sessionStore.get(sessionId);

  return {
    travelId,
  };
});
