function solution(strlist) {
  var answer = strlist.map((v) => v.length);
  return answer;
}

console.log(solution(['We', 'are', 'the', 'world!'])); // [2, 3, 3, 6]
console.log(solution(['I', 'Love', 'Programmers.'])); // [ 1, 4, 12 ]
