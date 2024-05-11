const isWeekday = (date) => date.getDay() % 6 !== 0;
const maxNumber = arr => Math.max(...arr);
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);