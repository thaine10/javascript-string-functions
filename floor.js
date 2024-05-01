const merge = [...new Set(a.concat(b))];
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};