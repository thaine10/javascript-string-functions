const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const merge = Object.assign({}, obj1, obj2);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());