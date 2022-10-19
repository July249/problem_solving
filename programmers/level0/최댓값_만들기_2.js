function solution(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  return numbers.at(0) * numbers.at(1) > numbers.at(-1) * numbers.at(-2)
    ? numbers.at(0) * numbers.at(1)
    : numbers.at(-1) * numbers.at(-2);
}

/* 테스트 8, 테스트 9 통과 못한 풀이 */
/* function solution(numbers) {
  const resultArr = [];
  for (let i of numbers) {
    for (let j of numbers) {
      if (i !== j && i < j) {
        resultArr.push(i * j);
      }
    }
  }
  return Math.max(...resultArr.sort((a, b) => a - b));
} */

console.log(solution([1, 2, -3, 4, -5])); // 15
console.log(solution([0, -31, 24, 10, 1, 9])); // 240
console.log(solution([10, 20, 30, 5, 5, 20, 5])); // 600
console.log(solution([-1, 1])); // -1
console.log(solution([-500, 10])); // -5000
