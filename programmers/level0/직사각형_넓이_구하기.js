function solution(dots) {
  for ([i, j] of dots) {
    console.log([i, j]);
  }
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
); // 1
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
); // 4
