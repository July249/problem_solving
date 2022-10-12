function solution(numbers) {
  var answer = 0;
  var sortedArr = numbers.sort((a, b) => b - a);
  var firstMaxValue = sortedArr[0];
  var secondMaxValue = sortedArr[1];
  answer = firstMaxValue * secondMaxValue;
  return answer;
}

/* function solution(numbers) {
  var answer = 0;
  var firstMaxValue = numbers.sort((a, b) => b - a).shift();
  var secondMaxValue = numbers.shift();
  answer = firstMaxValue * secondMaxValue;
  return answer;
} */

/* function solution(numbers) {
  var answer = 0;
  var sortedArr = numbers.sort((a, b) => b - a);
  var firstMaxValue = sortedArr.shift();
  var secondMaxValue = sortedArr.shift();
  answer = firstMaxValue * secondMaxValue;
  return answer;
} */

console.log(solution([1, 2, 3, 4, 5])); // 20
console.log(solution([0, 31, 24, 10, 1, 9])); // 744
