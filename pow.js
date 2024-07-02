const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
var pattern = {};
const resultingPromises = urls.map((url) => makHttpRequest(url));