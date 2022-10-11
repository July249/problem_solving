// ed. 2022-10-11
// reduce 이용
function solution(numbers) {
  var sum = 0;
  sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

/* function solution(numbers) {
  var sum = 0;
  for (var i of numbers) {
    sum += i;
    var answer = sum / numbers.length;
  }
  return answer;
} */
