const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const currentDate = () => new Date().toLocaleDateString('en-US');
const randomBoolean = () => Math.random() >= 0.5;