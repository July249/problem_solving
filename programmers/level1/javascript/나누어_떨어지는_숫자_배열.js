function solution(arr, divisor) {
  return arr.sort((a, b) => a - b).filter((num) => !(num % divisor)).length > 0
    ? arr.sort((a, b) => a - b).filter((num) => !(num % divisor))
    : [-1];
}

console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
console.log(solution([2, 36, 1, 3], 1)); // [1, 2, 3, 36]
console.log(solution([3, 2, 6], 10)); // [-1]
