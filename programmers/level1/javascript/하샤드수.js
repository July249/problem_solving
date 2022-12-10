function solution(x) {
  let testNum = 0;
  const str = x + "";
  console.log(str);
  for (let i of str) {
    testNum += parseInt(i);
  }
  return x % testNum ? false : true;
}

console.log(solution(10)); // true
console.log(solution(11)); // false
