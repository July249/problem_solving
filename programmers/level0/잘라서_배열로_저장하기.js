function solution(my_str, n) {
  let answer = [];
  for (let i = 0; i < my_str.length / n; i++) {
    let slicedStr = my_str.slice(i * n, (i + 1) * n);
    answer.push(slicedStr);
  }
  return answer;
}

console.log(solution('abc1Addfggg4556b', 6)); // ["abc1Ad", "dfggg4", "556b"]
console.log(solution('abcdef123', 3)); // 	["abc", "def", "123"]
