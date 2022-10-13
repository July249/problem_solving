function solution(my_string) {
  var answer = 0;
  var arr = my_string
    .replace(/[?!a-zA-Z]/g, '')
    .split('')
    .map((v) => parseInt(v))
    .sort((a, b) => a - b);
  for (let i of arr) {
    answer += i;
  }
  return answer;
}

console.log(solution('aAb1B2cC34oOp')); // 10
