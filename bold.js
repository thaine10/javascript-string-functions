const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';