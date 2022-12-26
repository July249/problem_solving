function solution(arr) {
  return arr.length > 1
    ? arr.sort((a, b) => b - a).splice(0, arr.sort((a, b) => b - a).indexOf(Math.min(...arr)))
    : [-1];
}

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  arr.length <= 1 ? (answer = [-1]) : (answer = arr);

  return answer;
}

console.log(solution([4, 3, 2, 1])); // [4, 3, 2]
console.log(solution([10])); // [-1]
