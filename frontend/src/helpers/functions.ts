import { Day, Hour, Month } from './enums';

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

export const getDatesInWeek = (date: Date): Date[] => {
  return Array(7)
    .fill(new Date(date))
    .map(
      (date, i) => new Date(date.setDate(date.getDate() - date.getDay() + i))
    );
};

export const getDifferenceBetweenDates = (
  startDate: Date,
  endDate: Date
): number => {
  return Math.round(
    (startDate.getTime() - endDate.getTime()) / (24 * 60 * 60 * 1000)
  );
};

export const convertUTCToLocale = (date: Date) => {
  // The specified value "2024-03-25T13:00:00.000Z" does not conform to the required format.  The format is "yyyy-MM-ddThh:mm" followed by optional ":ss" or ":ss.SSS".

  // toLocaleString() - 3/26/2024, 12:00:00 AM
  // toLocaleDateString() - 3/26/2024
  // toLocaleTimeString() - 12:00:00 AM
  const localeHourString = date.toLocaleTimeString().split(':');
  const extractedLocaleHour =
    localeHourString[0] + localeHourString[2].split(' ')[1];
  const hour = Hour[extractedLocaleHour];
  const minutes = localeHourString[1];
  const dateString = date.toLocaleDateString().split('/');
  let dayString = dateString[1];
  let monthString = dateString[0];

  if (dayString.length < 2) {
    dayString = '0' + dayString;
  }
  if (monthString.length < 2) {
    monthString = '0' + monthString;
  }

  const formattedDateString = `${dateString[2]}-${monthString}-${dayString}`;
  const localeString = `${formattedDateString}T${hour}:${minutes}`;
  return localeString;
};
