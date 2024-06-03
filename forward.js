const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const sumArray = arr => arr.reduce((total, current) => total + current, 0);