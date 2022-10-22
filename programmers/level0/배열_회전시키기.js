function solution(numbers, direction) {
  let answer = [];
  if (direction === 'right') {
    let lastEl = numbers[numbers.length - 1];
    answer[0] = lastEl;
    for (let i = 0; i < numbers.length - 1; i++) {
      answer.push(numbers[i]);
    }
  } else if (direction === 'left') {
    let firstEl = numbers[0];
    for (let j = 1; j < numbers.length; j++) {
      answer.push(numbers[j]);
    }
    answer.push(firstEl);
  }
  return answer;
}

console.log(solution([1, 2, 3], 'right')); // [3, 1, 2]
console.log(solution([4, 455, 6, 4, -1, 45, 6], 'left')); // [455, 6, 4, -1, 45, 6, 4]
