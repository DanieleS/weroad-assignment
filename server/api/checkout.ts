export default defineEventHandler(async (event) => {
  await sleep(400); // Simulate network delay

  setResponseStatus(event, 204);
});
