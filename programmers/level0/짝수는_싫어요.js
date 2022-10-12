function solution(n) {
  var answer = Array.from(
    { length: Math.floor((n + 1) / 2) },
    (_, idx) => 2 * idx + 1
  );
  return answer;
}

/* function solution(n) {
  var answer = Array.from({ length: n }, (_, idx) => idx + 1).filter(
    (v) => !!(v % 2)
  );
  return answer;
} */

console.log(solution(10)); // [1, 3, 5, 7, 9]
console.log(solution(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
