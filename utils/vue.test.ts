import { describe, expect, it } from "vitest";

describe("vue", () => {
  describe("getMaybeComputedRef", () => {
    it("should return a normal value as a computed ref", () => {
      const value = "foo";

      const sut = getMaybeComputedRef(value);

      expect(sut.value).toBe(value);
    });

    it("should return a computed ref as is", () => {
      const value = computed(() => "foo");

      const sut = getMaybeComputedRef(value);

      expect(sut).toBe(value);
    });
  });
});
