function solution(array) {
  let answer = 0;
  for (let i of array) {
    let str = i + '';
    for (let j = 0; j < str.length; j++) {
      if (str[j] == 7) {
        answer += 1;
      }
    }
  }
  return answer;
}

console.log(solution([7, 77, 17])); // 4
console.log(solution([10, 29])); // 0
