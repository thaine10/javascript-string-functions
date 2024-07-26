const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));