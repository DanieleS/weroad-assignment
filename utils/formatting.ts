/**
 * Format a date as a string using the user's locale.
 *
 * @param date The date to format.
 * @returns The formatted date.
 */
export const formatDate = (date: Date) => {
  const dateFormat = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return dateFormat.format(date);
};

/**
 * Format a number as a currency using the user's locale.
 *
 * @param value The number to format.
 * @param currency The currency code to use.
 * @returns The formatted currency.
 */
export const formatCurrency = (value: number, currency: string) => {
  const currencyFormat = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return currencyFormat.format(value);
};
