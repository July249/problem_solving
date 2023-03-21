function solution(numbers) {
  const sample = Array.from({ length: 10 }, (_, i) => i);
  const sampleResult = sample.reduce((a, c) => a + c, 0); // 45
  const targetResult = numbers.reduce((a, c) => a + c, 0);

  return sampleResult - targetResult;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); // 14
console.log(solution([5, 8, 4, 0, 6, 7, 9])); // 6
