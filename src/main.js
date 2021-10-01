import './css/main.css';

console.log('hello world');

const justPlainFunc = (str) =>
  str
    .split('')
    .map((char, i) => (i === 0 ? char.toUpperCase() : char))
    .join('');
