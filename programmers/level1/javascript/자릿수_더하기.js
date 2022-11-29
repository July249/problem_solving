// function solution(n) {
//   let answer = 0;
//   for (let i of String(n)) {
//     answer += ~~i
//   }
//   return answer
// }

function solution(n) {
  return [...String(n)].reduce((a, c) => Number(a) + Number(c), 0);
}

console.log(solution(123)); // 6
console.log(solution(987)); // 24
