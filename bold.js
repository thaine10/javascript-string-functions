const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const merge = (a, b) => [...a, ...b];
const merge = [...new Set([...a, ...b])];