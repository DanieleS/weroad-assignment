import { expect, test } from "@nuxt/test-utils/playwright";

test("Should navigate to the checkout page", async ({ page, goto }) => {
  await goto("/search", { waitUntil: "hydration" });

  const searchResult = page.getByTestId("search-result-0");
  await searchResult.getByRole("link").click();

  await page.waitForURL((url) => url.pathname.startsWith("/checkout/"));

  expect(page.url()).toContain("/checkout/");
});

test("Should complete the checkout process", async ({ page, goto }) => {
  await goto("/search", { waitUntil: "hydration" });

  const searchResult = page.getByTestId("search-result-0");
  await searchResult.getByRole("link").click();

  await page.waitForURL((url) => url.pathname.startsWith("/checkout/"));

  await page.getByRole("button", { name: "Next" }).click();

  // Fill in the form
  await page.fill("input[name='fullName']", "John Doe");
  await page.fill("input[name='email']", "test@example.com");
  await page.fill("input[name='phoneNumber']", "1234567890");

  await page.getByRole("button", { name: "Next" }).click();

  // Fill in the payment form
  await page.fill("input[name='cardNumber']", "4242424242424242");
  await page.fill("input[name='expiryDate']", "12/23");
  await page.fill("input[name='securityCode']", "123");
  await page.fill("input[name='cardHolder']", "John Doe");

  await page.getByRole("button", { name: "Pay" }).click();
});
