const appName = getAppName(channel);
const goToTop = () => window.scrollTo(0, 0);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));