const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const lastElement = arr => arr[arr.length - 1];
const flattenedArray = arr => [].concat(...arr);