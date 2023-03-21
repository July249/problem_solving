function solution(n) {
  let count = 0;
  while (count <= 500) {
    if (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = n * 3 + 1;
      }
    } else {
      return count;
    }
    count += 1;
  }
  if (count <= 500) {
    return count;
  } else {
    return -1;
  }
}

console.log(solution(1)); // 0
console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1
