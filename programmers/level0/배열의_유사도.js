function solution(s1, s2) {
  var answer = s1.filter((v) => s2.includes(v)).length;
  return answer;
}

console.log(solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c'])); // 2
console.log(solution(['n', 'omg'], ['m', 'dot'])); // 0
