import { defineVitestConfig } from "@nuxt/test-utils/config";
import { configDefaults } from "vitest/config";

export default defineVitestConfig({
  test: {
    exclude: [
      ...configDefaults.exclude,
      "./tests", // it contains e2e tests, which uses playwright
    ],
  },
});
