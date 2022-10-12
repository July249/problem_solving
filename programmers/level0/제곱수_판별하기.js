function solution(n) {
  var answer;
  Math.sqrt(n) !== parseInt(Math.sqrt(n)) ? (answer = 2) : (answer = 1);
  return answer;
}

console.log(solution(144));
console.log(solution(976));
