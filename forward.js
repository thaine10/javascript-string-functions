const merge = (a, b) => [...a, ...b];
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const result = await makeHttpRequest(url);