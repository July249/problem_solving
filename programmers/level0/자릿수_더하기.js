// ed. 2022-10-11
function solution(n) {
  n += ''; // n = String(n);
  var answer = n
    .split('')
    .map((v) => (v = parseInt(v)))
    .reduce((sum, cur) => sum + cur, 0);
  return answer;
}

/* function solution(n) {
  var answer = 0;
  n = String(n);
  for (let i = 0; i < n.length; i++) {
    answer += parseInt(n[i]);
  }
  return answer;
} */

console.log(solution(1234));
