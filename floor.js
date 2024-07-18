const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const repositoryRootPath = path.resolve(__dirname, '..');
const merge = Object.assign({}, obj1, obj2);