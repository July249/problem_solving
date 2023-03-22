function solution(arr) {
  let result = 1;
  arr.sort((a, b) => a - b);
  const minNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (0 >= arr[-1]) {
      return result;
    } else {
      if (arr.includes(result)) {
        result++;
      }
    }
  }
  return result;
}

console.log(solution([-1, -3])); // 1
console.log(solution([1, 2, 3])); // 4
console.log(solution([1, 3, 6, 4, 1, 2])); // 5
