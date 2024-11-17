import { describe, expect, it } from "vitest";

describe("url", () => {
  describe("buildUrlQueryParams", () => {
    it("should build URL query parameters from an object", () => {
      const params = {
        foo: "bar",
        baz: 42,
      };

      const sut = buildUrlQueryParams(params);

      expect(sut.toString()).toBe("foo=bar&baz=42");
    });

    it("should build URL query parameters from a nested object", () => {
      const params = {
        foo: {
          bar: "baz",
          qux: 42,
        },
      };

      const sut = buildUrlQueryParams(params);

      expect(sut.toString()).toBe("foo.bar=baz&foo.qux=42");
    });

    it("should build URL query parameters from a nested object with dates", () => {
      const params = {
        foo: {
          bar: new Date("2021-01-01T00:00:00Z"),
        },
      };

      const sut = buildUrlQueryParams(params);

      expect(sut.toString()).toBe("foo.bar=2021-01-01T00%3A00%3A00.000Z");
    });
  });

  describe("urlSearchParamsToRecord", () => {
    it("should convert URL search parameters to a record", () => {
      const searchParams = new URLSearchParams("foo=bar&baz=42");

      const sut = urlSearchParamsToRecord(searchParams);

      expect(sut).toEqual({
        foo: "bar",
        baz: "42",
      });
    });
  });
});
