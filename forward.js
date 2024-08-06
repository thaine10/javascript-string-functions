const goToTop = () => window.scrollTo(0, 0);
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const resultingPromises = urls.map((url) => makHttpRequest(url));