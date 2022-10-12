function gcd(x, y) {
  var r = 1;
  if (x % y === 0) {
    return (r = y);
  } else {
    while (x % y !== 0) {
      r = x % y;
      x = y;
      y = r;
    }
    return r;
  }
}

function solution(n) {
  var answer = n / gcd(n, 6);
  return answer;
}

console.log(solution(6)); // 1
console.log(solution(10)); // 5
console.log(solution(4)); // 2
