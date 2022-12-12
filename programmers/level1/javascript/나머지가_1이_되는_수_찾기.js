function solution(n) {
  for (let i = 2; i < n; i++) {
    if ((n - 1) % i === 0) return i;
  }
}

console.log(solution(10)); // 3
console.log(solution(12)); // 11
