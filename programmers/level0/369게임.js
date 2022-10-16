function solution(order) {
  let answer = 0;
  const orderArr = (order + '').split('');
  for (let i of orderArr) {
    if (parseInt(i) === 3 || parseInt(i) === 6 || parseInt(i) === 9) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution(3)); // 1
console.log(solution(29423)); // 2
