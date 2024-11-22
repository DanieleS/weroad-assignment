import { expect, test } from "@nuxt/test-utils/playwright";

test("Should navigate to the checkout page", async ({ page, goto }) => {
  await goto("/search", { waitUntil: "hydration" });

  const searchResult = page.getByTestId("search-result-0");
  await searchResult.getByRole("button").click();

  await page.waitForURL((url) => url.pathname.startsWith("/checkout"));

  expect(page.url()).toContain("/checkout");
});

test("Should complete the checkout process", async ({ page, goto }) => {
  await goto("/search", { waitUntil: "hydration" });

  const searchResult = page.getByTestId("search-result-0");
  await searchResult.getByRole("button").click();

  await page.waitForURL((url) => url.pathname.startsWith("/checkout"));

  await page.getByRole("button", { name: "Next" }).click();

  // Fill in the form
  await page.fill("input[name='fullName']", "Test User");
  await page.fill("input[name='email']", "test@example.com");
  await page.fill("input[name='phoneNumber']", "1234567890");

  await page.getByTestId("dateOfBirth").click();

  //Click on the first day of the visible month
  await page.locator("div").filter({ hasText: /^1$/ }).first().click();

  await page.getByRole("button", { name: "Next" }).click();

  // Fill in the payment form
  await page.fill("input[name='cardNumber']", "4242424242424242");
  await page.selectOption(
    "select[name='expirationMonth']",
    String(new Date().getMonth() + 1),
  );
  await page.selectOption(
    "select[name='expirationYear']",
    String(new Date().getFullYear()),
  );
  await page.fill("input[name='cvv']", "123");
  await page.fill("input[name='cardHolder']", "Test User");

  await page.getByRole("button", { name: "Confirm" }).click();

  await page.waitForURL((url) => url.pathname.startsWith("/checkout/success"));

  expect(page.url()).toContain("/checkout/success");
});
