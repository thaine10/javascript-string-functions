const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const scriptRootPath = path.join(repositoryRootPath, 'script');
const lastElement = arr => arr[arr.length - 1];