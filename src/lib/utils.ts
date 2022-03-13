export const getDaysAfterFirstJanuary = (date: Date) => {
  const treatAsUTC = (date) => {
    const result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
  };

  const daysBetween = (startDate, endDate) => {
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    return (+treatAsUTC(endDate) - +treatAsUTC(startDate)) / millisecondsPerDay;
  };
  return daysBetween(new Date(new Date().getFullYear(), 0, 1), date);
};
