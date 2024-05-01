const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);