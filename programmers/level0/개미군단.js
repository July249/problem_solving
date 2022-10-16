function solution(hp) {
  let antArr = new Array(3).fill(0);
  if (Math.floor(hp / 5) >= 1) {
    antArr[0] += Math.floor(hp / 5);
    hp -= antArr[0] * 5;
    antArr[1] += Math.floor(hp / 3);
    hp -= antArr[1] * 3;
    antArr[2] += hp;
  } else if (Math.floor(hp / 3) < 5) {
    antArr[1] += Math.floor(hp / 3);
    hp -= antArr[1] * 3;
    antArr[2] += hp;
  }
  let answer = antArr.reduce((sum, acc) => sum + acc, 0);
  return answer;
}

console.log(solution(23)); // 5
console.log(solution(24)); // 6
console.log(solution(999)); // 201
console.log(solution(1)); // 1
