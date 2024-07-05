const merge = [...new Set([...a, ...b])];
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';