const apmRootPath = path.join(repositoryRootPath, 'apm');
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);