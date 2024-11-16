/**
 * A value that can be either a regular value or a computed ref
 *
 * @param T The type of the value
 */
export type MaybeComputedRef<T> = T | ComputedRef<T>;

/**
 * Get a computed ref from a maybe computed ref
 *
 * @param value The maybe computed ref
 * @returns The computed ref
 */
export const getMaybeComputedRef = <T>(
  value: MaybeComputedRef<T>,
): ComputedRef<T> => {
  return isRef(value) ? value : computed(() => value);
};
