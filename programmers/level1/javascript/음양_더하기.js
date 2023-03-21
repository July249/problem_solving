function solution(abs, signs) {
  let numbers = [];
  let answer = 0;

  for (let i = 0; i < abs.length; i++) {
    if (signs[i]) {
      numbers.push(abs[i]);
    } else {
      numbers.push(-1 * abs[i]);
    }
    answer += numbers[i];
  }

  return answer;
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0
