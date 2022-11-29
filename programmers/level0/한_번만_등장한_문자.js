function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join('');
}

console.log(solution('abcabcadc')); // "d"
console.log(solution('abdc')); // "abcd"
console.log(solution('hello')); // "eho"
