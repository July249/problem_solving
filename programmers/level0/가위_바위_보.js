function solution(rsp) {
  let answer = [];
  for (const i of rsp.split('')) {
    if (i === '2') {
      answer.push('0');
    } else if (i === '0') {
      answer.push('5');
    } else if (i === '5') {
      answer.push('2');
    }
  }
  return answer.join('');
}

console.log(solution('2')); // '0'
console.log(solution('205')); // '052'
console.log(solution('222')); // '000'
