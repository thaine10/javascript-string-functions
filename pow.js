const uniqueArr = (arr) => [...new Set(arr)];
const randomBoolean = () => Math.random() >= 0.5;
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);