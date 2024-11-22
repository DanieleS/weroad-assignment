export default defineEventHandler(async (event) => {
  await sleep(400); // Simulate network delay

  const body = await readBody<{ session: string }>(event);

  if (typeof body.session !== "string") {
    return setResponseStatus(event, 400);
  }

  sessionStore.delete(body.session);

  setResponseStatus(event, 204);
});
