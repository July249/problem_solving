function solution(array) {
  const maxValue = Math.max(...array);
  const indexValue = array.indexOf(maxValue);
  const answer = [maxValue, indexValue];
  return answer;
}

console.log(solution([1, 8, 3])); // [8, 1]
console.log(solution([9, 10, 11, 8])); // [11, 2]
