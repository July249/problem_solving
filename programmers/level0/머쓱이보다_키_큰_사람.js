function solution(array, height) {
  var answer = 0;
  array
    .sort((a, b) => a - b > 0)
    .forEach((x) => (x > height ? (answer += 1) : (answer = 0)));
  return answer;
}
