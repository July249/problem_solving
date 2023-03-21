function solution(n) {
  const words = ['수', '박'];
  let answer = '';
  let count = 0;
  while (count < n) {
    count % 2 === 0 ? (answer += words[0]) : (answer += words[1]);
    count += 1;
  }
  return answer;
}

console.log(solution(3));
console.log(solution(4));
