const isTabInView = () => !document.hidden;
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());