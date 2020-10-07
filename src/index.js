module.exports = function reverse (n) {
  return Number(Array.from(Math.abs(n) + '').reverse().join(''));
}
