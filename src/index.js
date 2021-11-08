module.exports = function reverse (n) {
  return n > 0 ? 
    +Array.from(`${n}`).reverse().join('') : 
    +Array.from(`${n}`).slice(1).reverse().join('');
}
