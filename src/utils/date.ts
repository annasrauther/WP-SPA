/**
 * @module src/utils/date
 * @param inputDate - A date string
 * @returns A formatted date string
 *
 * @description This module contains a function that takes in a date string and returns a formatted date string.
 *
 * @example
 * formatDate("2021-09-01T00:00:00.000Z") // "September 1, 2021"
 */
export function formatDate(inputDate: string) {
  const date = new Date(inputDate);

  // Create an options object to pass into the toLocaleDateString() method
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Format the date to the user's locale
  const formattedDate = date.toLocaleDateString("en-US", options);

  // Return the formatted date string
  return formattedDate;
}
