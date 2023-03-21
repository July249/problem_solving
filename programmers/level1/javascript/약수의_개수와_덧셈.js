function halfInt(num) {
  return Math.floor(Math.sqrt(num));
}

function solution(left, right) {
  const resultArr = [];
  const value = 1;
  for (let i = left; i <= right; i++) {
    const divisableArr = [];
    for (let j = value; j <= halfInt(i); j++) {
      if (i % j === 0) {
        divisableArr.push(j);
        if (i / j !== j) {
          divisableArr.push(i / j);
        }
      }
    }
    if (divisableArr.length % 2 === 0) {
      resultArr.push(i);
    } else {
      resultArr.push(-1 * i);
    }
  }
  return resultArr.reduce((a, c) => a + c, 0);
}

console.log(solution(13, 17)); // 43
console.log(solution(24, 27)); // 52
