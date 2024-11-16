export type MaybeComputedRef<T> = T | ComputedRef<T>;

export const getMaybeComputedRef = <T>(
  value: MaybeComputedRef<T>,
): ComputedRef<T> => {
  return isRef(value) ? value : computed(() => value);
};
