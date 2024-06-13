const isWeekday = (date) => date.getDay() % 6 !== 0;
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());