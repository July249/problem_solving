function solution(N, stages) {
  let failRate = [];
  let users = stages.length;

  for (let i = 1; i <= N; i++) {
    let clearUsers = stages.filter((user) => user === i).length;
    failRate.push({ stage: i, prob: clearUsers / users });
    users -= clearUsers;
  }
  failRate.sort((a, b) => {
    if (a.prob < b.prob) return 1;
    if (a.prob === b.prob) return 0;
    if (a.prob > b.prob) return -1;
  });
  return failRate;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4,1,2,3]

// 문제풀이를 위한 기본 메서드 filter()
// [2, 1, 2, 6, 2, 4, 3, 3].filter((user) => user === 3);
// [3, 3]
