function solution(numbers, k) {
  let answer = [];
  for (let i = 0; i < k; i++) {
    answer = answer.concat(numbers);
  }
  // console.log(answer);
  return answer[(k - 1) * 2];
}

// numbers를 k - 1번 이어 붙여서 해결함
console.log(solution([1, 2, 3, 4], 2)); // 3
console.log(solution([1, 2, 3, 4, 5, 6], 5)); // 3
console.log(solution([1, 2, 3], 3)); // 2
