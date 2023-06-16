const calculateYearsDifference = (startDate: number[]) => {
  const [year, month] = startDate;
  const currentDate = new Date();
  const startMonthYear = new Date(year, month);
  const monthsDifference = (currentDate.getMonth() - startMonthYear.getMonth()) + 12 * (currentDate.getFullYear() - startMonthYear.getFullYear());
  const yearsDifference = Math.ceil(monthsDifference / 12);
  return yearsDifference;
}

export { calculateYearsDifference }