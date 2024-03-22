import { Day, Month } from './enums';

export const daysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

export const formatDateToString = (date: Date): string => {
  const day = Object.values(Day)[date.getDay()];
  const dateNum = date.getDate();
  const month = Object.values(Month)[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${dateNum} ${month} ${year}`;
};
