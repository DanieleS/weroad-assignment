import type { UseFetchOptions } from "#app";
import type { z } from "zod";

export type FetchResult<T, E> =
  | {
      status: "pending";
      data?: T;
      error?: E;
    }
  | {
      status: "idle";
    }
  | {
      status: "success";
      data: T;
    }
  | {
      status: "error";
      error: E;
    };

export const useFetchWithSchema = async <T>(
  url: MaybeComputedRef<string>,
  { schema, ...options }: UseFetchOptions<T> & { schema: z.Schema<T> },
): Promise<
  ComputedRef<{
    data: T | null;
    error: Error | null;
    status: "pending" | "success" | "error" | "idle";
  }>
> => {
  const result = await useFetch(url, options);

  return computed(() => {
    if (result.status.value === "idle") {
      return {
        data: null,
        error: null,
        status: "idle",
      };
    }

    if (result.status.value === "error") {
      return {
        data: null,
        error: result.error.value,
        status: "error",
      };
    }

    const parsedData = schema.safeParse(result.data.value);

    if (parsedData.success) {
      return {
        data: parsedData.data,
        error: null,
        status: result.status.value,
      };
    } else {
      console.error(parsedData.error.errors);
      return {
        data: null,
        error: new Error("Invalid data"),
        status: result.status.value,
      };
    }
  });
};
