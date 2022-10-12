function solution(numbers, num1, num2) {
  var answer = [...numbers].slice(num1, num2 + 1);
  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 1, 3)); // [2, 3, 4]
