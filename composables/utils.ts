export const useUtils = () => {
  const formatAmount = (amount: number): string => {
    const formatter = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    });

    return formatter.format(amount);
  };

  return {
    formatAmount,
  };
};
