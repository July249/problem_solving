function solution(cipher, code) {
  return [...cipher].filter((val, idx) => idx % code === code - 1).join('');
}

console.log(solution('dfjardstddetckdaccccdegk', 4)); // "attack"
console.log(solution('pfqallllabwaoclk', 2)); // "fallback"
