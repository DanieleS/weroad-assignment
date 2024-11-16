/**
 * Append search parameters to a URL search params object.
 * It supports nested objects by recursively appending keys.
 *
 * @param query The URL search params object to append to.
 * @param params The object to serialize.
 * @param prefix The prefix to use for the current object.
 */
const appendSearchParams = (
  query: URLSearchParams,
  params: Record<string, unknown>,
  prefix?: string,
) => {
  for (const [key, value] of Object.entries(params)) {
    const paramKey = prefix ? `${prefix}.${key}` : key;

    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      !(value instanceof Date)
    ) {
      appendSearchParams(query, value as Record<string, unknown>, paramKey);
    } else if (value !== undefined && value !== null) {
      const serializedValue =
        value instanceof Date ? value.toISOString() : String(value);
      query.append(paramKey, serializedValue);
    }
  }
};

/**
 * Build URL query parameters from an object.
 * It supports nested objects.
 *
 * @param params The object to serialize.
 * @returns The URL query parameters.
 */
export const buildUrlQueryParams = (params: Record<string, unknown>) => {
  const query = new URLSearchParams();

  appendSearchParams(query, params);

  return query;
};

/**
 * Convert URL search parameters to a record.
 *
 * @param searchParams The URL search parameters.
 * @returns The record.
 */
export const urlSearchParamsToRecord = (searchParams: URLSearchParams) => {
  const record: Record<string, string> = {};

  for (const [key, value] of searchParams.entries()) {
    record[key] = value;
  }

  return record;
};
