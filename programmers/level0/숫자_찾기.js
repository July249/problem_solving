function solution(num, k) {
  var answer = num.toString().indexOf(k);
  answer !== -1 ? (answer += 1) : answer;
  return answer;
}

console.log(solution(29183, 1));
