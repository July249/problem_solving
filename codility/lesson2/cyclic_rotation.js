function solution(A, K) {
  let result = new Array(A.length);

  for (let i in A) {
    result[(parseInt(i) + K) % A.length] = A[i];
  }
  return result;
}

console.log(solution([3, 8, 9, 7, 6], 3));
console.log(solution([0, 0, 0], 1));
console.log(solution([1, 2, 3, 4], 3));
