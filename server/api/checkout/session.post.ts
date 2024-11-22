import crypto from "node:crypto";

export default defineEventHandler(async (event) => {
  await sleep(400); // Simulate network delay

  const body = await readBody<{ tripId: string }>(event);

  const sessionId = crypto.randomUUID();
  sessionStore.set(sessionId, body.tripId);

  return {
    sessionId,
  };
});
