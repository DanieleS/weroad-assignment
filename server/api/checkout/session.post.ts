import crypto from "node:crypto";

export default defineEventHandler(async (event) => {
  await sleep(400); // Simulate network delay

  const body = await readBody<{ travelId: string }>(event);

  const sessionId = crypto.randomUUID();
  sessionStore.set(sessionId, body.travelId);

  return {
    sessionId,
  };
});
