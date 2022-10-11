function solution(n, numlist) {
  var answer = [];
  numlist.forEach((num) => (num % n === 0 ? answer.push(num) : null));
  return answer;
}
