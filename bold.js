const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const randomBoolean = () => Math.random() >= 0.5;
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));