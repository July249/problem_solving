function solution(s) {
  const midIdx = Math.floor(parseInt(s.length) / 2);
  return s.length % 2 === 0 ? s[midIdx - 1] + s[midIdx] : s[midIdx];
}

console.log(solution('abcde')); // 'c'
console.log(solution('qwer')); // 'we'
