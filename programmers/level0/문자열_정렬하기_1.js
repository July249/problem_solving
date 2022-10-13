function solution(my_string) {
  var answer = my_string
    .replace(/[?!a-z]/g, '')
    .split('')
    .map((v) => parseInt(v))
    .sort((a, b) => a - b);
  return answer;
}
