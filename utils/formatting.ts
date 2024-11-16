const dateFormat = new Intl.DateTimeFormat(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const formatDate = (date: Date) => {
  return dateFormat.format(date);
};

export const formatCurrency = (value: number, currency: string) => {
  const currencyFormat = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return currencyFormat.format(value);
};
