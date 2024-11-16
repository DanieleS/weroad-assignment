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

export const buildUrlQueryParams = (
  params: Record<string, unknown>,
  prefix?: string,
) => {
  const query = new URLSearchParams();

  appendSearchParams(query, params, prefix);

  return query;
};

export const urlSearchParamsToRecord = (searchParams: URLSearchParams) => {
  const record: Record<string, string> = {};

  for (const [key, value] of searchParams.entries()) {
    record[key] = value;
  }

  return record;
};
