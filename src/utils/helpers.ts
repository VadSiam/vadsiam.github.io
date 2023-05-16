const calculateYearsDifference = (startDate: string) => {
  const currentDate = new Date();
  const startMonthYear = new Date(startDate);
  const monthsDifference = (currentDate.getMonth() - startMonthYear.getMonth()) + 12 * (currentDate.getFullYear() - startMonthYear.getFullYear());
  const yearsDifference = Math.ceil(monthsDifference / 12);
  return yearsDifference;
}

export { calculateYearsDifference }